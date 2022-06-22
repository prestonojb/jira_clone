import React, { Fragment, useState } from 'react';
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

const ProjectBoardIssueDetailsDueDate = ({ issue, updateIssue }) => (
  <Fragment>
    <SectionTitle>Due Date</SectionTitle>
    <Modal
      testid="modal:duedate"
      width={400}
      renderLink={modal => <Button onClick={modal.open}>{formatDateTime(issue.dueDate)}</Button>}
      renderContent={modal => (
        <ModalContents>
          <ModalTitle>Due Date</ModalTitle>

          <DatePicker
            selected={new Date(formatDateTime(issue.dueDate))}
            onChange={date => updateIssue({ dueDate: date })}
            inline
            showTimeSelect
          />

          <Actions>
            <Button variant="primary" onClick={modal.close}>
              Done
            </Button>
          </Actions>
        </ModalContents>
      )}
    />
  </Fragment>
);

ProjectBoardIssueDetailsDueDate.propTypes = propTypes;

export default ProjectBoardIssueDetailsDueDate;
