import { render } from '@testing-library/react';

import ImgViewer from './img-viewer';

describe('ImgViewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImgViewer />);
    expect(baseElement).toBeTruthy();
  });
});
