/* next */
import type { FC } from 'react';

interface Iprops {
  text: string;
}

export const Button: FC<Iprops> = ({ text }) => {
  return <button type="button">{text}</button>;
};
