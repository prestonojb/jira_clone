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
const entities_1 = require("entities");
const projects_1 = require("constants/projects");
const issues_1 = require("constants/issues");
const typeorm_1 = require("utils/typeorm");
const seedUsers = () => {
    const users = [
        (0, typeorm_1.createEntity)(entities_1.User, {
            email: 'gaben@jira.test',
            name: 'Gaben',
            avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
        }),
        (0, typeorm_1.createEntity)(entities_1.User, {
            email: 'yoda@jira.test',
            name: 'Yoda',
            avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
        }),
    ];
    return Promise.all(users);
};
const seedProject = (users) => (0, typeorm_1.createEntity)(entities_1.Project, {
    name: 'Project name',
    url: 'https://www.testurl.com',
    description: 'Project description',
    category: projects_1.ProjectCategory.SOFTWARE,
    users,
});
const seedIssues = (project) => {
    const { users } = project;
    const issues = [
        (0, typeorm_1.createEntity)(entities_1.Issue, {
            title: 'Issue title 1',
            type: issues_1.IssueType.TASK,
            status: issues_1.IssueStatus.BACKLOG,
            priority: issues_1.IssuePriority.LOWEST,
            listPosition: 1,
            reporterId: users[0].id,
            project,
        }),
        (0, typeorm_1.createEntity)(entities_1.Issue, {
            title: 'Issue title 2',
            type: issues_1.IssueType.TASK,
            status: issues_1.IssueStatus.BACKLOG,
            priority: issues_1.IssuePriority.MEDIUM,
            listPosition: 2,
            estimate: 5,
            description: 'Issue description 2',
            reporterId: users[0].id,
            users: [users[0]],
            project,
        }),
        (0, typeorm_1.createEntity)(entities_1.Issue, {
            title: 'Issue title 3',
            type: issues_1.IssueType.STORY,
            status: issues_1.IssueStatus.SELECTED,
            priority: issues_1.IssuePriority.HIGH,
            listPosition: 3,
            estimate: 10,
            description: 'Issue description 3',
            reporterId: users[0].id,
            users: [users[0], users[1]],
            project,
        }),
    ];
    return Promise.all(issues);
};
const seedComments = (issue, user) => (0, typeorm_1.createEntity)(entities_1.Comment, {
    body: 'Comment body',
    issueId: issue.id,
    userId: user.id,
});
const createTestAccount = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield seedUsers();
    const project = yield seedProject(users);
    const issues = yield seedIssues(project);
    yield seedComments(issues[0], project.users[0]);
    return users[0];
});
exports.default = createTestAccount;
//# sourceMappingURL=createTestAccount.js.map