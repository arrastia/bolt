import { Styles } from './Spinner.styles';

const DOTS = [1, 2, 3];

export const Spinner = () => (
  <Styles.Spinner>
    {DOTS.map(dot => (
      <Styles.Dot key={dot} style={{ animationDelay: `${dot * 0.07}s` }} />
    ))}
  </Styles.Spinner>
);
