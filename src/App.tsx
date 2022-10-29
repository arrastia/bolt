import { GlobalStyles } from 'Global.styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout } from 'ui/components/Layout';
import { Map } from 'ui/components/Map';

import { NotFound } from 'ui/pages/NotFound';
import { SignUp } from 'ui/pages/SignUp';

import { light } from 'ui/styles/themes';

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Map />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<SignUp />} index={true} />
            <Route element={<NotFound />} path={'*'} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
