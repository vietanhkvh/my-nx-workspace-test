import { render } from '@testing-library/react';

import UiSlider from './ui-slider';

describe('UiSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSlider />);
    expect(baseElement).toBeTruthy();
  });
});
