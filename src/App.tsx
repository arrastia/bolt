import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styles';

import { routes } from 'configuration/routes';

import { Fallback } from 'ui/components/Fallback';
import { Layout } from 'ui/components/Layout';
import { Map } from 'ui/components/Map';

import { darkTheme, lightTheme } from 'ui/styles/themes';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from 'ui/stores/UserStore';

const NotFound = lazy(() => import('ui/pages/NotFound'));
const SignUp = lazy(() => import('ui/pages/SignUp'));

export function App() {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Map />
      <Suspense fallback={<Fallback />}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route element={<SignUp />} index={true} />
              <Route element={<NotFound />} path={routes.NOT_FOUND} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}
