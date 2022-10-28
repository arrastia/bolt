import { Outlet } from 'react-router-dom';

import { Header } from 'ui/components/Header';
import { Places } from '../Places';
import { Styles } from './Layout.styles';

export const Layout = () => {
  return (
    <Styles.Layout id="layout-id">
      <Header />
      <Places />
      <Outlet />
    </Styles.Layout>
  );
};
