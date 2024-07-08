import { render } from '@testing-library/react';

import PrevHook from './PrevHook';

describe('PrevHook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrevHook />);
    expect(baseElement).toBeTruthy();
  });
});
