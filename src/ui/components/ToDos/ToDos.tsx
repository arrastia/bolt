import { useEffect, useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Styles } from './ToDos.styles';

export const ToDos = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    animateCheckbox();
  }, []);

  const animateCheckbox = () => {
    setTimeout(() => {
      setIsChecked(true);
    }, 500);
  };

  return (
    <Styles.ToDos>
      <Checkbox isChecked={isChecked}>Make the decision.</Checkbox>
      <Checkbox>Sign Up and start driving!</Checkbox>
    </Styles.ToDos>
  );
};
