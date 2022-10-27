import { render } from '@testing-library/react';

import ReadMore from './read-more';

describe('ReadMore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReadMore />);
    expect(baseElement).toBeTruthy();
  });
});
