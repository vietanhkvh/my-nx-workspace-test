import { render } from '@testing-library/react';

import UiSliderMultipleItems from './ui-slider-multiple-items';

describe('UiSliderMultipleItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSliderMultipleItems />);
    expect(baseElement).toBeTruthy();
  });
});
