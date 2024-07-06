import { render } from '@testing-library/react';

import SplitView from './SplitView';

describe('SplitView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SplitView />);
    expect(baseElement).toBeTruthy();
  });
});
