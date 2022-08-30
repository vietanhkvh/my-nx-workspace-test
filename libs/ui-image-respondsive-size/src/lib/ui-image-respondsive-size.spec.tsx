import { render } from '@testing-library/react';

import UiImageRespondsiveSize from './ui-image-respondsive-size';

describe('UiImageRespondsiveSize', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiImageRespondsiveSize />);
    expect(baseElement).toBeTruthy();
  });
});
