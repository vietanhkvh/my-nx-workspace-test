import { render } from '@testing-library/react';

import Debounce from './debounce';

describe('Debounce', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Debounce />);
    expect(baseElement).toBeTruthy();
  });
});
