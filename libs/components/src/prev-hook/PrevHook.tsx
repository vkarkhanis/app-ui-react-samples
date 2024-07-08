import styled from 'styled-components';

const StyledPrevHook = styled.div`
  color: pink;
`;

export function PrevHook() {
  return (
    <StyledPrevHook>
      <h1>Welcome to PrevHook!</h1>
    </StyledPrevHook>
  );
}

export default PrevHook;
