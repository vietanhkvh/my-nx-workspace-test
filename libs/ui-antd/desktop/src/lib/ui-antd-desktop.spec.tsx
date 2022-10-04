import { render } from '@testing-library/react';

import UiAntdDesktop from './ui-antd-desktop';

describe('UiAntdDesktop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiAntdDesktop />);
    expect(baseElement).toBeTruthy();
  });
});
