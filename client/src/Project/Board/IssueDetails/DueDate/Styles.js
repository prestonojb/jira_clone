import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const ModalContents = styled.div`
padding: 20px 25px 25px;
`;

export const ModalTitle = styled.div`
padding-bottom: 14px;
${font.medium}
${font.size(20)}
`;

export const Actions = styled.div`
display: flex;
justify-content: flex-end;
`;
