import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  color,
  font,
  mixin,
  issueLabelColors,
  issueLabelBackgroundColors,
} from 'shared/utils/styles';
import { Avatar, Button } from 'shared/components';

export const IssueLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;

export const Issue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  ${mixin.clickable}
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
  &:hover {
    background: ${color.backgroundLight};
  }
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)}
  @media (max-width: 1100px) {
    ${font.size(14.5)}
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
`;

export const StyledDueDateButton = styled(Button)`
  padding: 0 4px;
  font-size: 11px;
  height: 18px;
`;

export const Label = styled.div`
  ${props => mixin.tag(issueLabelBackgroundColors[props.color], issueLabelColors[props.color])}
  ${font.size(11)}
  transition: all 0.1s;
  margin: 0 2px 2px 0;
  padding: 0 4px;
  height: 18px;
`;
