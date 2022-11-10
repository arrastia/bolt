import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Divider } from 'ui/components/Divider';
import { Header } from 'ui/components/Header';
import { Places } from 'ui/components/Places';
import { Sheet } from 'ui/components/Sheet';
import { Sidebar } from 'ui/components/Sidebar';

import { useBreakpoints } from 'ui/hooks/useBreakpoints';
import { useBlockScroll } from 'ui/hooks/useBlockScroll';

import type { SheetRef } from 'ui/components/Sheet';

export const Layout = () => {
  const ref = useRef<SheetRef>(null);

  const { breakpoint } = useBreakpoints();
  useBlockScroll();

  const snapTo = (index: number) => ref.current?.snapTo(index);

  const close = () => snapTo(1);

  const renderContent = () => (
    <Sheet initialSnap={1} isOpen={true} onClose={close} ref={ref} snapPoints={[-50, 100, 0]}>
      <Outlet />
    </Sheet>
  );

  return (
    <Styles.Layout id="layout-id">
      <Header />
      {breakpoint === 'xs' && <Places />}
      {breakpoint !== 'xs' && <Divider />}
      <Styles.Main>
        <Sidebar />
        {breakpoint === 'xs' ? renderContent() : <Outlet />}
      </Styles.Main>
    </Styles.Layout>
  );
};
