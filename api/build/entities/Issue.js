"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const striptags_1 = __importDefault(require("striptags"));
const typeorm_1 = require("typeorm");
const validation_1 = __importDefault(require("utils/validation"));
const issues_1 = require("constants/issues");
const _1 = require(".");
let Issue = class Issue extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.setDescriptionText = () => {
            if (this.description) {
                this.descriptionText = (0, striptags_1.default)(this.description);
            }
        };
    }
};
Issue.validations = {
    title: [validation_1.default.required(), validation_1.default.maxLength(200)],
    type: [validation_1.default.required(), validation_1.default.oneOf(Object.values(issues_1.IssueType))],
    status: [validation_1.default.required(), validation_1.default.oneOf(Object.values(issues_1.IssueStatus))],
    priority: [validation_1.default.required(), validation_1.default.oneOf(Object.values(issues_1.IssuePriority))],
    listPosition: validation_1.default.required(),
    reporterId: validation_1.default.required(),
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Issue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Issue.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Issue.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Issue.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Issue.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { array: true, nullable: true }),
    __metadata("design:type", Array)
], Issue.prototype, "labels", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], Issue.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)('double precision'),
    __metadata("design:type", Number)
], Issue.prototype, "listPosition", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", Object)
], Issue.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", Object)
], Issue.prototype, "descriptionText", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { nullable: true }),
    __metadata("design:type", Object)
], Issue.prototype, "estimate", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { nullable: true }),
    __metadata("design:type", Object)
], Issue.prototype, "timeSpent", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { nullable: true }),
    __metadata("design:type", Object)
], Issue.prototype, "timeRemaining", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Issue.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Issue.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('integer'),
    __metadata("design:type", Number)
], Issue.prototype, "reporterId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Project, project => project.issues),
    __metadata("design:type", _1.Project)
], Issue.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)('integer'),
    __metadata("design:type", Number)
], Issue.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Comment, comment => comment.issue),
    __metadata("design:type", Array)
], Issue.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _1.User, user => user.issues),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Issue.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.RelationId)((issue) => issue.users),
    __metadata("design:type", Array)
], Issue.prototype, "userIds", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Object)
], Issue.prototype, "setDescriptionText", void 0);
Issue = __decorate([
    (0, typeorm_1.Entity)()
], Issue);
exports.default = Issue;
//# sourceMappingURL=Issue.js.map