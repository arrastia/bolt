import { Styles } from './Map.styles';

import { useMap } from './hooks/useMap';

export const Map = () => {
  const mapRef = useMap();

  return <Styles.Map ref={mapRef} />;
};
