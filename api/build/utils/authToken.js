"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const lodash_1 = require("lodash");
const errors_1 = require("errors");
const signToken = (payload, options) => jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, Object.assign({ expiresIn: '180 days' }, options));
exports.signToken = signToken;
const verifyToken = (token) => {
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if ((0, lodash_1.isPlainObject)(payload)) {
            return payload;
        }
        throw new Error();
    }
    catch (error) {
        throw new errors_1.InvalidTokenError();
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=authToken.js.map