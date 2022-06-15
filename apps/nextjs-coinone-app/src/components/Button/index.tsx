/* next */
import type { FC } from 'react';

/* style */
import { smallGrayButton } from './Button.style';

interface Iprops {
  text: String;
}

export const Button: FC<Iprops> = ({ text }) => {
  return <button type="button">{text}</button>;
};
