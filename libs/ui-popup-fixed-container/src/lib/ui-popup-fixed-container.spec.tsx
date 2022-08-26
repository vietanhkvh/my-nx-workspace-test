import { render } from '@testing-library/react';

import UiPopupFixedContainer from './ui-popup-fixed-container';

describe('UiPopupFixedContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPopupFixedContainer />);
    expect(baseElement).toBeTruthy();
  });
});
