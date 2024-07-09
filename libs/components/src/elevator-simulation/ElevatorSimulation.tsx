import {
  CenteredColumnLayout,
  CenteredRowLayout,
} from '@app-ui-react-samples/common-styles';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const CounterIn = styled.input`
  width: 100px;
  margin: 10px;
`;

const Floor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  background-color: coral;
  margin: 10px;
  color: #5c0707;
  font-size: xx-large;
  font-weight: bold;
  border-radius: 100px;
  margin: 10px;
`;

const StartButton = styled.input`
  background-color: #80e0e4;
  border-radius: 10px;
  width: 100px;
  color: #2c23d5;
  &:disabled {
    background-color: #ccbbbb;
    color: hsl(0, 12%, 62%);
  }
  &:hover:enabled {
    background-color: hsl(180, 37%, 83%);
  }
`;

const FloorModel = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid green;
`;

const GroundFloorModelContainer = styled.div`
  display: flex;
  width: 150px;
`;

const GroundFloor = styled(FloorModel)`
  background-color: teal;
  margin-right: 10px;
`;

const FloorModelContainer = styled(CenteredColumnLayout)`
  padding-bottom: 10px;
`;

const FloorContainer = styled.div<{ isCurrentFloor: boolean }>`
  width: 21px;
  height: 20px;
  background-color: ${({ isCurrentFloor }) =>
    isCurrentFloor ? 'red' : 'white'};
`;

const MaxFloor = 15;
let targetFloorBySelection = -1;

const GroundFloorModel: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <GroundFloorModelContainer>
    <GroundFloor onClick={onClick} />
    <div>Ground Floor</div>
  </GroundFloorModelContainer>
);

const ElevatorSimulation = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [targetFloor, setTargetFloor] = useState<number>(0);
  const [startTraversal, setStartTraversal] = useState<boolean>(false);

  const handleTraversal = useCallback(() => {
    setStartTraversal(false);
    const traversalInterval = setInterval(() => {
      setCurrentFloor((prev) => {
        if (prev === targetFloor) {
          clearInterval(traversalInterval);
          if (targetFloorBySelection !== -1) {
            targetFloorBySelection = -1;
          }

          return prev;
        }
        return prev > targetFloor ? prev - 1 : prev + 1;
      });
    }, 1000);
  }, [targetFloor]);

  useEffect(() => {
    if (targetFloor === targetFloorBySelection) {
      handleTraversal();
    }
  }, [targetFloor, handleTraversal]);

  const selectTargetFloor = (floor: number) => {
    targetFloorBySelection = floor;
    setTargetFloor(floor);
  };

  const handleFloorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const floorNumber = Number(e.target.value);
    const floorBoundary =
      floorNumber > MaxFloor ? MaxFloor : floorNumber < 0 ? 0 : floorNumber;
    setStartTraversal(true);
    setTargetFloor(floorBoundary);
  };

  return (
    <CenteredColumnLayout>
      <CenteredRowLayout>
        <CounterIn
          type="number"
          max={MaxFloor}
          min={0}
          value={targetFloor}
          onChange={handleFloorChange}
        />

        <StartButton
          type="button"
          value="Start"
          onClick={handleTraversal}
          disabled={!startTraversal}
        />
      </CenteredRowLayout>
      <CenteredRowLayout>
        <Floor>Floor: {currentFloor}</Floor>
        <CenteredColumnLayout>
          <FloorModelContainer>
            {Array.from({ length: MaxFloor + 1 }, (_, index) => index).map(
              (eachValue) => {
                const navFloor = MaxFloor - eachValue;
                return (
                  <FloorContainer
                    isCurrentFloor={currentFloor === navFloor}
                    key={eachValue}
                  >
                    {navFloor ? (
                      <FloorModel onClick={() => selectTargetFloor(navFloor)} />
                    ) : (
                      <GroundFloorModel onClick={() => selectTargetFloor(0)} />
                    )}
                  </FloorContainer>
                );
              }
            )}
          </FloorModelContainer>
        </CenteredColumnLayout>
      </CenteredRowLayout>
    </CenteredColumnLayout>
  );
};

export default ElevatorSimulation;
