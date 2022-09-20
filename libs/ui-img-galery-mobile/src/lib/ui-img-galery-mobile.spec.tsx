import { render } from '@testing-library/react';

import UiImgGaleryMobile from './ui-img-galery-mobile';

describe('UiImgGaleryMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiImgGaleryMobile />);
    expect(baseElement).toBeTruthy();
  });
});
