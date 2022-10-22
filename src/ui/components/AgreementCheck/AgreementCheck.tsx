import { Fragment } from 'react';

import { Styles } from './AgreementCheck.styles';

import { Link } from 'ui/components/Link';

export const AgreementCheck = () => {
  return (
    <Fragment>
      <Styles.Animation viewBox="0 0 0 0">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="boxGradient" x1="0" x2="25" y1="0" y2="25">
            <stop offset="0%" stopColor="#249e64" />
            <stop offset="100%" stopColor="#34d186" />
          </linearGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#34d186" />
            <stop offset="100%" stopColor="#249e64" />
          </linearGradient>

          <path d="M21 12.3h168v0.1z" id="todo__line" stroke="url(#lineGradient)" />
          <path
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
            id="todo__box"
            stroke="url(#boxGradient)"
          />
          <path d="M10 13l2 2 5-5" id="todo__check" stroke="url(#boxGradient)" />
          <circle cx="13.5" cy="12.5" id="todo__circle" r="10" />
        </defs>
      </Styles.Animation>

      <Styles.ToDoList>
        <Styles.ToDo>
          <Styles.Checkbox type="checkbox" />

          <Styles.Icon viewBox="0 0 200 25" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <Styles.Line xlinkHref="#todo__line" />
            <Styles.Box xlinkHref="#todo__box" />
            <Styles.Check xlinkHref="#todo__check" />
            <Styles.Circle xlinkHref="#todo__circle" />
          </Styles.Icon>

          <Styles.Text onClick={event => event.preventDefault()}>
            I agree Bolt's <Link>Terms of Service</Link> and <Link>Privacy Policy.</Link>
          </Styles.Text>
        </Styles.ToDo>
      </Styles.ToDoList>
    </Fragment>
  );
};
