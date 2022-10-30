import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Divider } from 'ui/components/Divider';
import { Header } from 'ui/components/Header';
import { Places } from 'ui/components/Places';
import { Sidebar } from 'ui/components/Sidebar';

export const Layout = () => {
  return (
    <Styles.Layout id="layout-id">
      <Header />
      <Divider />
      <ErrorBoundary fallback={<div>ERROR Loading cities</div>}>
        <Suspense fallback={<div>LOADING</div>}>
          <Places />
        </Suspense>
      </ErrorBoundary>
      <Divider />
      <Styles.Main>
        <Sidebar />
        <Outlet />
      </Styles.Main>
    </Styles.Layout>
  );
};
