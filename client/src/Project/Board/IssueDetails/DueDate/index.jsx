import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'shared/styles/react-datepicker.css';

import { Button, Modal } from 'shared/components';
import { isBefore, formatDateTime } from 'shared/utils/dateTime';

import { SectionTitle } from '../Styles';
import { ActionButton, ModalContents, ModalTitle, Actions } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsDueDate = ({ issue, updateIssue }) => {
  return (
    <Fragment>
      <SectionTitle>Due Date</SectionTitle>
      <Modal
        testid="modal:duedate"
        width={350}
        renderLink={modal => (
          <Button variant={isBefore(issue.dueDate) ? 'danger' : 'secondary'} onClick={modal.open}>
            {issue.dueDate ? formatDateTime(issue.dueDate) : 'None'}
          </Button>
        )}
        renderContent={modal => (
          <ModalContents>
            <ModalTitle>Due Date</ModalTitle>
            <DatePicker
              selected={issue.dueDate ? new Date(formatDateTime(issue.dueDate)) : ''}
              onChange={date => updateIssue({ dueDate: date })}
              inline
              showTimeInput
            />
            <Actions>
              <ActionButton onClick={() => updateIssue({ dueDate: null })}>Remove</ActionButton>
              <ActionButton variant="primary" onClick={modal.close}>
                Save
              </ActionButton>
            </Actions>
          </ModalContents>
        )}
      />
    </Fragment>
  );
};

ProjectBoardIssueDetailsDueDate.propTypes = propTypes;

export default ProjectBoardIssueDetailsDueDate;
