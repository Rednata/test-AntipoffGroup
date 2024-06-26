import { useAppDispatch, useAppSelector } from '../../store/store';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { IItem } from '../../types&Interface';
import { Container } from '../Container/Container';
import style from './Catalog.module.css';
import { useEffect } from 'react';
import {
  catalogRequestAsync
} from '../../store/catalogStore/catalogActionRequest';
import { getToken } from '../../localStorage/controlLocalStorage';
import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const token = getToken();
  const catalog = useAppSelector(state => state.catalogList.catalogList);

  const isShowLoadMoreBtn = (useAppSelector(
    state => (state.catalogList.totalMembers / catalog.length) > 1));

  useEffect(() => {
    if (token) {
      dispatch(catalogRequestAsync());
    }
  }, []);

  return (
    <>
      <section className={style.hero}>
        <div className={style.wrap}>
          <h2 className={style.title}>Наша команда</h2>
          <p className={style.text}>
            Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
            которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить
            выход из&nbsp;любых, даже самых сложных ситуаций.
          </p>
        </div>
      </section>
      <Container>
        <section className={style.catalog}>
          <ul className={style.list}>
            {
              catalog.map((item: IItem) =>
                <CatalogItem data={item} key={Math.random()}/>)
            }
          </ul>

          {
            isShowLoadMoreBtn && <ButtonLoadMore />
          }

        </section>
      </Container>
    </>
  );
};
