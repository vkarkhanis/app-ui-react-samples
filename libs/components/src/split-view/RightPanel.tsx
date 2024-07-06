import styled from 'styled-components';

const RightPanelContainer = styled.div`
  flex: 1;
`;

export const RightPanel: React.FC<{ children: any }> = ({ children }) => {
  return <RightPanelContainer>{children}</RightPanelContainer>;
};
