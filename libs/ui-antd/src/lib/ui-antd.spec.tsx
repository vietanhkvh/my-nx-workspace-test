import { render } from '@testing-library/react';

import UiAntd from './ui-antd';

describe('UiAntd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiAntd />);
    expect(baseElement).toBeTruthy();
  });
});
