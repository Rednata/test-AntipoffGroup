import { useEffect, useState } from 'react';
import { ButtonLogout } from '../ButtonLogout/ButtonLogout';
import { Container } from '../Container/Container';
import style from './Header.module.css';
import { ButtonBack } from '../ButtonBack/ButtonBack';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [isLoadAbsoluteHeader, setIsLoadAbsoluteHeader] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    setIsLoadAbsoluteHeader(path.includes('/card'));
  }, [path]);

  return (
      isLoadAbsoluteHeader ? (
        <div className={style.wrapHeader}>
          <header className={style.headerAbsolute}>
            <Container>
              <div className={style.wrapBtns}>
                <ButtonBack />
                <ButtonLogout />
              </div>
            </Container>
          </header>
        </div>
      ) : (
        <header className={style.header}>
          <Container>
            <ButtonLogout />
          </Container>
        </header>
      )
  );
};
