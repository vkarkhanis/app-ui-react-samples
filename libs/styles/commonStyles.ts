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

export const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
