import { Styles } from './Logo.styles';

import { logo } from 'assets/images';

import { useFountain } from 'ui/hooks/useFountain';

export const Logo = () => {
  const fountainRef = useFountain<HTMLImageElement>(['🚗', '🛴', '🚲', '🚚', '🚘', '🚕', '🚖', '🛵', '🚍', '🚀', '🛸', '🚁']);

  return <Styles.Logo alt="Proton Logo" ref={fountainRef} src={logo} />;
};
