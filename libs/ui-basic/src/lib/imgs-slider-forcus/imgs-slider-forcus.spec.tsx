import { render } from '@testing-library/react';

import ImgsSliderForcus from './imgs-slider-forcus';

describe('ImgsSliderForcus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImgsSliderForcus />);
    expect(baseElement).toBeTruthy();
  });
});
