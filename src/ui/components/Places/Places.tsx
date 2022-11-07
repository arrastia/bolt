import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Styles } from './Places.styles';

import { Locations } from './components/Locations';
import { SuspendedPlaces } from './components/SuspendedPlaces';

export const Places = () => {
  return (
    <Styles.Container>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<SuspendedPlaces />}>
          <Locations />
        </Suspense>
      </ErrorBoundary>
    </Styles.Container>
  );
};
