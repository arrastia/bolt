import { Styles } from './SignUp.styles';

import { Button } from 'ui/components/Button';
import { Form } from 'ui/components/Form';
import { LearnMore } from 'ui/components/LearnMore';
import { Title } from 'ui/components/Title';
import { ToDos } from 'ui/components/ToDos';

import { useBreakpoints } from 'ui/hooks/useBreakpoints';

export const SignUp = () => {
  const { breakpoint } = useBreakpoints();

  if (breakpoint === 'xs') return <Form />;

  return (
    <Styles.Section>
      <div className="content-flex">
        <Title />
        <h2>Set your schedule and earn extra money by driving!</h2>
        <ToDos />
        <div className="action-buttons">
          <Button>Get started</Button>
          <LearnMore />
        </div>
      </div>
      <div className="form-flex">
        <Form />
      </div>
    </Styles.Section>
  );
};
