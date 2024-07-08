import styled from 'styled-components';

const RightPanelContainer = styled.div`
  flex: 1;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RightPanel: React.FC<{ children: any }> = ({ children }) => {
  return <RightPanelContainer>{children}</RightPanelContainer>;
};
