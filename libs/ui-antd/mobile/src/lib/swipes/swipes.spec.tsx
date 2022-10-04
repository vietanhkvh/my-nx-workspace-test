import { render } from '@testing-library/react';

import Swipes from './swipes';

describe('Swipes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Swipes />);
    expect(baseElement).toBeTruthy();
  });
});
