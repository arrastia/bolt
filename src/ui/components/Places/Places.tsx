import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Styles } from './Places.styles';

import { Locations } from './components/Locations';
import { LocationsFallback } from './components/LocationsFallback';
import { SuspendedPlaces } from './components/SuspendedPlaces';
import { Spinner } from '../Spinner';

export const Places = () => {
  return (
    <Styles.Container>
      <ErrorBoundary fallback={<LocationsFallback />}>
        <Suspense fallback={<Spinner style={{ position: 'absolute', right: '50%', top: '75%' }} />}>
          <Locations />
        </Suspense>
      </ErrorBoundary>
    </Styles.Container>
  );
};
