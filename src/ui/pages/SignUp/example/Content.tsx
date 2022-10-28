import { useRef } from 'react';
import styled from 'styled-components';

import { Styles } from './Example.styles';

import { AgreementCheck } from 'ui/components/AgreementCheck';
import { Button } from 'ui/components/Button';
import { Input } from 'ui/components/Input';
import { Sheet } from 'ui/components/Sheet';

import type { SheetRef } from 'ui/components/Sheet';

export const ContentHeight = () => {
  const ref = useRef<SheetRef>();

  const snapTo = (index: number) => ref.current?.snapTo(index);

  const close = () => snapTo(1);

  const open = () => snapTo(0);

  return (
    <Sheet
      header={<Styles.Header onClick={open}>Become a Bolt driver.</Styles.Header>}
      initialSnap={1}
      isOpen={true}
      onClose={close}
      ref={ref}
      snapPoints={[-50, 100, 0]}
      springConfig={{ stiffness: 150, damping: 20, mass: 1 }}>
      <BoxList>
        <Input placeholder="email" />
        <Input placeholder="phone" />
        <Input placeholder="city" />
        <AgreementCheck />
        <Button>Sign up</Button>
      </BoxList>
    </Sheet>
  );
};

const BoxList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
  overflow: auto;
  gap: 1rem;
  margin-top: 1rem;
`;

const Box = styled.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;

export default ContentHeight;
