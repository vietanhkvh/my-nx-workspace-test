import { render } from '@testing-library/react';

import UiAntdAntdDesk from './ui-antd-antd-desk';

describe('UiAntdAntdDesk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiAntdAntdDesk />);
    expect(baseElement).toBeTruthy();
  });
});
