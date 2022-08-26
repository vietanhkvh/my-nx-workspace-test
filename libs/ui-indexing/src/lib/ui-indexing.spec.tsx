import { render } from '@testing-library/react';

import UiIndexing from './ui-indexing';

describe('UiIndexing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiIndexing />);
    expect(baseElement).toBeTruthy();
  });
});
