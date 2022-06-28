import React from 'react';
import PropTypes from 'prop-types';
import { xor } from 'lodash';

import { Button } from 'shared/components';
import { IssueLabel, IssueLabelCopy } from 'shared/constants/issues';

import {
  Filters,
  SearchInput,
  Label,
  Avatars,
  AvatarIsActiveBorder,
  StyledAvatar,
  StyledButton,
  StyledSelect,
  ClearAll,
} from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

const ProjectBoardFilters = ({ projectUsers, defaultFilters, filters, mergeFilters }) => {
  const { searchTerm, userIds, myOnly, recent, showPastDue, labels } = filters;

  const areFiltersCleared =
    !searchTerm &&
    userIds.length === 0 &&
    !myOnly &&
    !recent &&
    !showPastDue &&
    labels.length === 0;

  return (
    <Filters data-testid="board-filters">
      <SearchInput
        icon="search"
        value={searchTerm}
        onChange={value => mergeFilters({ searchTerm: value })}
      />
      <Avatars>
        {projectUsers.map(user => (
          <AvatarIsActiveBorder key={user.id} isActive={userIds.includes(user.id)}>
            <StyledAvatar
              avatarUrl={user.avatarUrl}
              name={user.name}
              onClick={() => mergeFilters({ userIds: xor(userIds, [user.id]) })}
            />
          </AvatarIsActiveBorder>
        ))}
      </Avatars>
      <StyledButton
        variant="empty"
        isActive={myOnly}
        onClick={() => mergeFilters({ myOnly: !myOnly })}
      >
        Only My Issues
      </StyledButton>
      {/* <StyledButton
        variant="empty"
        isActive={recent}
        onClick={() => mergeFilters({ recent: !recent })}
      >
        Recently Updated
      </StyledButton> */}
      <StyledButton
        variant="empty"
        isActive={showPastDue}
        onClick={() => mergeFilters({ showPastDue: !showPastDue })}
      >
        Show Past Due
      </StyledButton>
      <StyledSelect
        isMulti
        isMinifiedMulti
        variant="empty"
        dropdownWidth={343}
        placeholder="Labels"
        name="labels"
        value={labels}
        options={Object.values(IssueLabel).map(issueLabel => ({
          value: issueLabel,
          label: IssueLabelCopy[issueLabel],
        }))}
        renderValue={() => <Button variant="empty">Labels {labels.length}</Button>}
        renderOption={({ value: issueLabel, label }) => <Label color={issueLabel}>{label}</Label>}
        onChange={selectedLabels => mergeFilters({ labels: selectedLabels })}
      />
      {!areFiltersCleared && (
        <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear all</ClearAll>
      )}
    </Filters>
  );
};

ProjectBoardFilters.propTypes = propTypes;

export default ProjectBoardFilters;
