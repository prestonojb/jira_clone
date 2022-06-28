import styled, { css } from 'styled-components';

import {
  color,
  font,
  mixin,
  issueLabelColors,
  issueLabelBackgroundColors,
} from 'shared/utils/styles';
import { InputDebounced, Avatar, Button, Select } from 'shared/components';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const SearchInput = styled(InputDebounced)`
  margin-right: 18px;
  width: 160px;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 12px 0 2px;
`;

export const AvatarIsActiveBorder = styled.div`
  display: inline-flex;
  margin-left: -2px;
  border-radius: 50%;
  transition: transform 0.1s;
  ${mixin.clickable};
  ${props => props.isActive && `box-shadow: 0 0 0 4px ${color.primary}`}
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;

export const StyledButton = styled(Button)`
  margin-left: 6px;
`;

export const ClearAll = styled.div`
  height: 32px;
  line-height: 32px;
  margin-left: 15px;
  padding-left: 12px;
  border-left: 1px solid ${color.borderLightest};
  color: ${color.textDark};
  ${font.size(14.5)}
  ${mixin.clickable}
  &:hover {
    color: ${color.textMedium};
  }
`;

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

export const StyledSelect = styled(Select)`
  margin-left: 6px;
`;
