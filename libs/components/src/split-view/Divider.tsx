import { useContext } from 'react';
import styled from 'styled-components';
import { SplitViewContext } from './context';

const DividerContainer = styled.div`
  cursor: col-resize;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 0.25px;
`;

const StyledDivider = styled.div`
  width: 0.5px;
  height: 100%;
  margin: 0.5rem;
  border: 0.5px solid black;
`;

export const Divider: React.FC = () => {
  const { onMouseDown } = useContext(SplitViewContext);
  return (
    <DividerContainer>
      <StyledDivider onMouseDown={onMouseDown} />
    </DividerContainer>
  );
};
