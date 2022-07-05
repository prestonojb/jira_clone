"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
const errors_1 = require("errors");
exports.getCurrentUser = (0, errors_1.catchErrors)((req, res) => {
    res.respond({ currentUser: req.currentUser });
});
//# sourceMappingURL=users.js.map