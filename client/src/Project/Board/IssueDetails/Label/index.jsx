import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Icon, Select } from 'shared/components';
import { IssueLabel, IssueLabelCopy } from 'shared/constants/issues';
import { Label } from './Styles';

import { SectionTitle } from '../Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsLabel = ({ issue, updateIssue }) => {
  return (
    <Fragment>
      <SectionTitle>Labels</SectionTitle>
      <Select
        isMulti
        variant="empty"
        dropdownWidth={343}
        placeholder="Unlabelled"
        name="labels"
        value={issue.labels || []}
        options={Object.values(IssueLabel).map(issueLabel => ({
          value: issueLabel,
          label: IssueLabelCopy[issueLabel],
        }))}
        renderValue={({ value: issueLabel, removeOptionValue }) => (
          <Label
            key={issueLabel}
            isValue
            color={issueLabel}
            onClick={() => removeOptionValue && removeOptionValue()}
          >
            {IssueLabelCopy[issueLabel]}
            {removeOptionValue && <Icon type="close" top={1} />}
          </Label>
        )}
        renderOption={({ value: issueLabel, label }) => <Label color={issueLabel}>{label}</Label>}
        onChange={labels => updateIssue({ labels })}
      />
    </Fragment>
  );
};

ProjectBoardIssueDetailsLabel.propTypes = propTypes;

export default ProjectBoardIssueDetailsLabel;
