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
exports.update = exports.getProjectWithUsersAndIssues = void 0;
const entities_1 = require("entities");
const errors_1 = require("errors");
const typeorm_1 = require("utils/typeorm");
const issues_1 = require("serializers/issues");
exports.getProjectWithUsersAndIssues = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield (0, typeorm_1.findEntityOrThrow)(entities_1.Project, req.currentUser.projectId, {
        relations: ['users', 'issues'],
    });
    res.respond({
        project: Object.assign(Object.assign({}, project), { issues: project.issues.map(issues_1.issuePartial) }),
    });
}));
exports.update = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield (0, typeorm_1.updateEntity)(entities_1.Project, req.currentUser.projectId, req.body);
    res.respond({ project });
}));
//# sourceMappingURL=projects.js.map