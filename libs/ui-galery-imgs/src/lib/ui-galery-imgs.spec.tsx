import { render } from '@testing-library/react';

import UiGaleryImgs from './ui-galery-imgs';

describe('UiGaleryImgs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiGaleryImgs />);
    expect(baseElement).toBeTruthy();
  });
});
