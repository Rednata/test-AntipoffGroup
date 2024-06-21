import { ReactNode } from 'react';
import style from './Container.module.css';

type Props = {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  console.log();

  return (
    <div className={style.container}>{children}</div>
  );
};
