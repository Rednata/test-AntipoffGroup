import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import style from './Header.module.css';
import { ButtonBack } from '../ButtonBack/ButtonBack';

export const Header = () => {
  const [isLoadAbsoluteHeader, setIsLoadAbsoluteHeader] = useState(false);

  useEffect(() => {
    const path = window.location;
    setIsLoadAbsoluteHeader(path.pathname.includes('/catalog/card'));
  }, [isLoadAbsoluteHeader]);

  return (
      isLoadAbsoluteHeader ? (
        <div className={style.wrapHeader}>
          <header className={style.headerAbsolute}>
            <Container>
              <div className={style.wrapBtns}>
                <ButtonBack />
                <Button />
              </div>
            </Container>
          </header>
        </div>
      ) : (
        <header className={style.header}>
        <Container>          
          <Button />
        </Container>
        </header>
      )
  );
};
