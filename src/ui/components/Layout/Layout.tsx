import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Header } from 'ui/components/Header';
import { Places } from 'ui/components/Places';

export const Layout = () => {
  return (
    <Styles.Layout id="layout-id">
      <Header />
      <Places />
      <Outlet />
    </Styles.Layout>
  );
};
