"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuePartial = void 0;
const lodash_1 = require("lodash");
const issuePartial = (issue) => (0, lodash_1.pick)(issue, [
    'id',
    'title',
    'type',
    'status',
    'dueDate',
    'labels',
    'priority',
    'listPosition',
    'createdAt',
    'updatedAt',
    'userIds',
]);
exports.issuePartial = issuePartial;
//# sourceMappingURL=issues.js.map