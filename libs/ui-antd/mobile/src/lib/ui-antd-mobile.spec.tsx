import { render } from '@testing-library/react';

import UiAntdMobile from './ui-antd-mobile';

describe('UiAntdMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiAntdMobile />);
    expect(baseElement).toBeTruthy();
  });
});
