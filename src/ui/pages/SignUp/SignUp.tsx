import { useRef } from 'react';

import { Styles } from './SignUp.styles';

import { Form } from 'ui/components/Form';
import { Sheet } from 'ui/components/Sheet';

import type { SheetRef } from 'ui/components/Sheet';

export const SignUp = () => {
  const ref = useRef<SheetRef>();

  const snapTo = (index: number) => ref.current?.snapTo(index);

  const close = () => snapTo(1);

  const open = () => snapTo(0);

  return (
    <Styles.Section>
      <Sheet
        header={<Styles.Header onClick={open}>Become a Bolt driver.</Styles.Header>}
        initialSnap={1}
        isOpen={true}
        onClose={close}
        ref={ref}
        snapPoints={[-50, 100, 0]}
        springConfig={{ stiffness: 150, damping: 20, mass: 1 }}>
        <Form />
      </Sheet>
    </Styles.Section>
  );
};
