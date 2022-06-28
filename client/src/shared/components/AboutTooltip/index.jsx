import React from 'react';

import Button from 'shared/components/Button';
import Tooltip from 'shared/components/Tooltip';

import feedbackImage from './assets/feedback.png';
import { FeedbackDropdown, FeedbackImageCont, FeedbackImage, FeedbackParagraph } from './Styles';

const AboutTooltip = tooltipProps => (
  <Tooltip
    width={300}
    {...tooltipProps}
    renderContent={() => (
      <FeedbackDropdown>
        <FeedbackImageCont>
          <FeedbackImage src={feedbackImage} alt="Give feedback" />
        </FeedbackImageCont>

        <FeedbackParagraph>
          This simplified Jira clone is built with React on the front-end and Node/TypeScript on the
          back-end.
        </FeedbackParagraph>

        {/* <a href="https://getivor.com/" target="_blank" rel="noreferrer noopener">
          <Button variant="primary">Visit Website</Button>
        </a> */}

        <a
          href="https://github.com/prestonojb/jira_clone"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button icon="github">Github Repo</Button>
        </a>
      </FeedbackDropdown>
    )}
  />
);

export default AboutTooltip;
