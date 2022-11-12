import { Styles } from './LocationsFallback.styles';

import { Button } from 'ui/components/Button';

export const LocationsFallback = () => {
  return (
    <Styles.Fallback>
      There was an error loading the locations.
      <Button>Try again</Button>
    </Styles.Fallback>
  );
};
