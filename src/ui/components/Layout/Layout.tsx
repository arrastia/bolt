import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Divider } from 'ui/components/Divider';
import { Header } from 'ui/components/Header';
import { Places } from 'ui/components/Places';
import { Sidebar } from 'ui/components/Sidebar';

import { useBreakpoints } from 'ui/hooks/useBreakpoints';

export const Layout = () => {
  const { breakpoint } = useBreakpoints();

  return (
    <Styles.Layout id="layout-id">
      <Header />
      {breakpoint === 'xs' && <Places />}
      {breakpoint !== 'xs' && <Divider />}
      <Styles.Main>
        <Sidebar />
        <Outlet />
      </Styles.Main>
    </Styles.Layout>
  );
};
