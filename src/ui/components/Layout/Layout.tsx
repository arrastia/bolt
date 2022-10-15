import { Outlet } from 'react-router-dom';

import { Header } from 'ui/components/Header';
import { Styles } from './Layout.styles';

export const Layout = () => {
  return (
    <Styles.Layout>
      <Header />
      <Outlet />
    </Styles.Layout>
  );
};
