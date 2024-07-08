import styled from 'styled-components';

const StyledHoC = styled.div`
  color: pink;
`;

export function HoC() {
  return (
    <StyledHoC>
      <h1>Welcome to HoC!</h1>
    </StyledHoC>
  );
}

export default HoC;
