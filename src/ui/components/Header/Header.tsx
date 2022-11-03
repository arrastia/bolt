import { Fragment } from 'react';

import { Styles } from './Header.styes';

import { Button } from 'ui/components/Button';
import { DynamicIsland } from 'ui/components/DynamicIsland';
import { Logo } from 'ui/components/Logo';
import { ThemeButton } from 'ui/components/ThemeButton';

import { useBreakpoints } from 'ui/hooks/useBreakpoints';

export const Header = () => {
  const { breakpoint } = useBreakpoints();

  const renderHeader = () => {
    if (breakpoint === 'xs') return <DynamicIsland />;

    return (
      <Fragment>
        <Logo />
        <Styles.ActionButtons>
          <Button>Sign in</Button>
          <ThemeButton />
        </Styles.ActionButtons>
      </Fragment>
    );
  };

  return <Styles.Header>{renderHeader()}</Styles.Header>;
};
