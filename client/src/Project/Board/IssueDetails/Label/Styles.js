import styled, { css } from 'styled-components';

import { issueLabelColors, issueLabelBackgroundColors, mixin } from 'shared/utils/styles';

export const Label = styled.div`
  text-transform: uppercase;
  transition: all 0.1s;
  ${props => mixin.tag(issueLabelBackgroundColors[props.color], issueLabelColors[props.color])}
  ${props =>
    props.isValue &&
    css`
      margin: 0 10px 5px 0;
      padding: 4px 8px;
      border-radius: 4px;
      transition: background 0.1s;
      &:hover {
        background: ${mixin.lighten(issueLabelBackgroundColors[props.color], 0.15)};
      }
    `}
`;
