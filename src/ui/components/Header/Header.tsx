import { Styles } from './Header.styes';

import { DynamicIsland } from 'ui/components/DynamicIsland';
import { Logo } from 'ui/components/Logo';

import { useBreakpoints } from 'ui/hooks/useBreakpoints';
import { Fragment } from 'react';
import { Button } from '../Button';

export const Header = () => {
  const { breakpoint } = useBreakpoints();

  const renderHeader = () => {
    if (breakpoint === 'xs') return <DynamicIsland />;

    return (
      <Fragment>
        <Logo />
        <Styles.ActionButtons>
          <Button>Sign in</Button>
        </Styles.ActionButtons>
      </Fragment>
    );
  };

  return <Styles.Header>{renderHeader()}</Styles.Header>;
};
