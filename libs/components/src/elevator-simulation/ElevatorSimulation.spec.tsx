import { render } from '@testing-library/react';

import ElevatorSimulation from './ElevatorSimulation';

describe('ElevatorSimulation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ElevatorSimulation />);
    expect(baseElement).toBeTruthy();
  });
});
