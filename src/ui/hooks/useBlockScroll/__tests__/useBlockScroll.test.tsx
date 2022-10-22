import { render } from '@testing-library/react';

import { useBlockScroll } from '../useBlockScroll';

function Example({ isDisabled }: { isDisabled?: boolean }) {
  useBlockScroll(isDisabled);

  return <div />;
}

describe('useBlockScroll', function () {
  it('should set overflow: hidden on the body on mount and remove on unmount', () => {
    const { unmount } = render(<Example />);

    expect(document.documentElement.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('should work with nested modals', () => {
    const { unmount } = render(
      <div>
        <Example />
        <Example />
      </div>
    );

    expect(document.documentElement.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it.skip('should not set overflow: hidden if isDisabled is true', () => {
    const { unmount } = render(<Example isDisabled={true} />);

    expect(document.documentElement.style.overflow).toBe('');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
