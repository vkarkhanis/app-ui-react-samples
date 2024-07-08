import { render } from '@testing-library/react';

import HoC from './HoC';

describe('HoC', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HoC />);
    expect(baseElement).toBeTruthy();
  });
});
