import { useRef } from 'react';

import { Styles } from './SignUp.styles';

import { Button } from 'ui/components/Button';
import { Form } from 'ui/components/Form';
import { LearnMore } from 'ui/components/LearnMore';
import { Sheet } from 'ui/components/Sheet';
import { Title } from 'ui/components/Title';

import type { SheetRef } from 'ui/components/Sheet';
import { ToDos } from 'ui/components/ToDos';

export const SignUp = () => {
  const ref = useRef<SheetRef>(null);

  const snapTo = (index: number) => ref.current?.snapTo(index);

  const close = () => snapTo(1);

  const open = () => snapTo(0);

  return (
    <>
      <Styles.Section>
        <div className="content-flex">
          <Title />
          <h2>Set your schedule and earn extra money by driving!</h2>

          <ToDos />

          <div className="action-buttons">
            <Button>Get started</Button>
            <LearnMore />
          </div>
        </div>
        <div className="form-flex">
          <Form />
        </div>
      </Styles.Section>

      <Sheet
        header={<Styles.Header onClick={open}>Become a Bolt driver.</Styles.Header>}
        initialSnap={1}
        isOpen={true}
        onClose={close}
        ref={ref}
        snapPoints={[-50, 100, 0]}>
        <Form />
      </Sheet>
    </>
  );
};
