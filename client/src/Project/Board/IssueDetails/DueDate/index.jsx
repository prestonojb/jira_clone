import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Button, Modal } from 'shared/components';
import { formatDateTime } from 'shared/utils/dateTime';

import { SectionTitle } from '../Styles';
import { ModalContents, ModalTitle, Actions } from './Styles';

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
        width={400}
        renderLink={modal => (
          <Button onClick={modal.open}>
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
              // customTimeInput={<ExampleCustomTimeInput />}
            />

            <Actions>
              <Button onClick={() => handleRemoveDueDate(modal, issue, updateIssue)}>Remove</Button>
              <Button variant="primary" onClick={modal.close}>
                Save
              </Button>
            </Actions>
          </ModalContents>
        )}
      />
    </Fragment>
  );
};

const handleRemoveDueDate = (modal, issue, updateIssue) => {
  updateIssue({ dueDate: null });
  modal.close();
};

ProjectBoardIssueDetailsDueDate.propTypes = propTypes;

export default ProjectBoardIssueDetailsDueDate;
