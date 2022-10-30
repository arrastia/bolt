import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/components/Layout';
import { Map } from 'ui/components/Map';

import { light } from 'ui/styles/themes';

const NotFound = lazy(() => import('ui/pages/NotFound'));
const SignUp = lazy(() => import('ui/pages/SignUp'));

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Map />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              element={
                <Suspense fallback={<div>LOADING SignUp</div>}>
                  <SignUp />
                </Suspense>
              }
              index={true}
            />
            <Route
              element={
                <Suspense fallback={<div>LOADING NotFound</div>}>
                  <NotFound />
                </Suspense>
              }
              path={routes.NOT_FOUND}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
