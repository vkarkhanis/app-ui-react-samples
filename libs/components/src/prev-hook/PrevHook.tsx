import {
  CenteredColumnLayout,
  CenterPanel,
} from '@app-ui-react-samples/common-styles';
import * as React from 'react';
import styled from 'styled-components';
import { usePrev } from './hooks/usePrev';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Content = styled(CenterPanel)<{ backgroundColor?: string }>`
  height: 200px;
  width: 200px;
  color: white;
  border: 1px solid black;
  margin: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Button = styled.button`
  color: rgb(163, 100, 23);
  border-radius: 10px;
  font-family: monospace;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 25px;
`;

type DisplayValues = {
  value: number;
  color: string;
};
const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const PrevHook = () => {
  const [generatedDetails, setGeneratedDetails] = React.useState<DisplayValues>(
    { value: 0, color: '#AA66FF' }
  );

  const getValues = () => {
    setGeneratedDetails((prev) => ({
      ...prev,
      value: prev.value + 1,
      color: getRandomColor(),
    }));
  };

  return (
    <ShowPrevValues displayValues={generatedDetails} generator={getValues} />
  );
};

const ShowPrevValues: React.FC<{
  displayValues: { value: number; color: string };
  generator: () => void;
}> = ({ displayValues, generator }) => {
  const { prev } = usePrev<DisplayValues>(displayValues);

  const handleClick = () => {
    generator();
  };

  return (
    <CenteredColumnLayout>
      <Container>
        <CenterPanel>
          <Content backgroundColor={prev?.color}>
            Previous Value: {prev?.value}
          </Content>
          <Content backgroundColor={displayValues.color}>
            Current Value: {displayValues.value}
          </Content>
        </CenterPanel>
      </Container>
      <ButtonContainer>
        <Button name="alternate" onClick={handleClick}>
          Alternate
        </Button>
      </ButtonContainer>
    </CenteredColumnLayout>
  );
};

export default PrevHook;
