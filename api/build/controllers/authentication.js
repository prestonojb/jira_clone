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
exports.createGuestAccount = void 0;
const errors_1 = require("errors");
const authToken_1 = require("utils/authToken");
const createGuestAccount_1 = __importDefault(require("database/createGuestAccount"));
exports.createGuestAccount = (0, errors_1.catchErrors)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, createGuestAccount_1.default)();
    res.respond({
        authToken: (0, authToken_1.signToken)({ sub: user.id }),
    });
}));
//# sourceMappingURL=authentication.js.map