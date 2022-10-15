import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'ui/components/Layout';

import { NotFound } from 'ui/pages/NotFound';
import { SignUp } from 'ui/pages/SignUp';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<SignUp />} index={true} />
          <Route element={<NotFound />} path={'*'} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
