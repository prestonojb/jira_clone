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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const authToken_1 = require("utils/authToken");
const errors_1 = require("errors");
const entities_1 = require("entities");
exports.authenticateUser = (0, errors_1.catchErrors)((req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = getAuthTokenFromRequest(req);
    if (!token) {
        throw new errors_1.InvalidTokenError('Authentication token not found.');
    }
    const userId = (0, authToken_1.verifyToken)(token).sub;
    if (!userId) {
        throw new errors_1.InvalidTokenError('Authentication token is invalid.');
    }
    const user = yield entities_1.User.findOne(userId);
    if (!user) {
        throw new errors_1.InvalidTokenError('Authentication token is invalid: User not found.');
    }
    req.currentUser = user;
    next();
}));
const getAuthTokenFromRequest = (req) => {
    const header = req.get('Authorization') || '';
    const [bearer, token] = header.split(' ');
    return bearer === 'Bearer' && token ? token : null;
};
//# sourceMappingURL=authentication.js.map