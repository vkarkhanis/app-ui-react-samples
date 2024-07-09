import styled from 'styled-components';

export const CenterPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredRowLayout = styled(CenterPanel)`
  flex-direction: row;
`;

export const CenteredColumnLayout = styled(CenterPanel)`
  flex-direction: column;
`;
