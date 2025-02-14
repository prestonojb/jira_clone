import { pick } from 'lodash';

import { Issue } from 'entities';

export const issuePartial = (issue: Issue): Partial<Issue> =>
  pick(issue, [
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
