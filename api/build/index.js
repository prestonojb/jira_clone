"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createConnection_1 = __importDefault(require("database/createConnection"));
const response_1 = require("middleware/response");
const authentication_1 = require("middleware/authentication");
const errors_1 = require("middleware/errors");
const errors_2 = require("errors");
const routes_1 = require("./routes");
const establishDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, createConnection_1.default)();
    }
    catch (error) {
        console.log(error);
    }
});
const initializeExpress = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded());
    app.use(response_1.addRespondToResponse);
    (0, routes_1.attachPublicRoutes)(app);
    app.use('/', authentication_1.authenticateUser);
    (0, routes_1.attachPrivateRoutes)(app);
    app.use((req, _res, next) => next(new errors_2.RouteNotFoundError(req.originalUrl)));
    app.use(errors_1.handleError);
    app.listen(process.env.PORT || 3000);
};
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield establishDatabaseConnection();
    initializeExpress();
});
initializeApp();
//# sourceMappingURL=index.js.map