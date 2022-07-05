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
exports.remove = exports.update = exports.create = exports.getIssueWithUsersAndComments = exports.getProjectIssues = void 0;
const entities_1 = require("entities");
const errors_1 = require("errors");
const typeorm_1 = require("utils/typeorm");
exports.getProjectIssues = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.currentUser;
    const { searchTerm } = req.query;
    let whereSQL = 'issue.projectId = :projectId';
    if (searchTerm) {
        whereSQL += ' AND (issue.title ILIKE :searchTerm OR issue.descriptionText ILIKE :searchTerm)';
    }
    const issues = yield entities_1.Issue.createQueryBuilder('issue')
        .select()
        .where(whereSQL, { projectId, searchTerm: `%${searchTerm}%` })
        .getMany();
    res.respond({ issues });
}));
exports.getIssueWithUsersAndComments = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issue = yield (0, typeorm_1.findEntityOrThrow)(entities_1.Issue, req.params.issueId, {
        relations: ['users', 'comments', 'comments.user'],
    });
    res.respond({ issue });
}));
exports.create = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPosition = yield calculateListPosition(req.body);
    const issue = yield (0, typeorm_1.createEntity)(entities_1.Issue, Object.assign(Object.assign({}, req.body), { listPosition }));
    res.respond({ issue });
}));
exports.update = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issue = yield (0, typeorm_1.updateEntity)(entities_1.Issue, req.params.issueId, req.body);
    res.respond({ issue });
}));
exports.remove = (0, errors_1.catchErrors)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const issue = yield (0, typeorm_1.deleteEntity)(entities_1.Issue, req.params.issueId);
    res.respond({ issue });
}));
const calculateListPosition = ({ projectId, status }) => __awaiter(void 0, void 0, void 0, function* () {
    const issues = yield entities_1.Issue.find({ projectId, status });
    const listPositions = issues.map(({ listPosition }) => listPosition);
    if (listPositions.length > 0) {
        return Math.min(...listPositions) - 1;
    }
    return 1;
});
//# sourceMappingURL=issues.js.map