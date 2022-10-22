import { createRef } from 'react';
import { render } from '@testing-library/react';

import { mergeRefs } from '../mergeRefs';

describe('mergeRefs utility', () => {
  it('should merge refs', () => {
    const ref1 = createRef();
    const ref2 = createRef();
    const ref3 = createRef();

    const mergedRef = mergeRefs([ref1, ref2, ref3]);

    const { getByTestId } = render(<div data-testid="test" ref={mergedRef} />);

    expect(ref1.current).toBe(getByTestId('test'));
    expect(ref2.current).toBe(getByTestId('test'));
    expect(ref3.current).toBe(getByTestId('test'));
  });
});
