import { useAppSelector } from '../../store/store';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { IItem } from '../../types&Interface';
import { Container } from '../Container/Container';
import style from './Catalog.module.css';
import { Pagination } from '../Pagination/Pagination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  catalogRequestAsync
} from '../../store/catalogStore/catalogActionRequest';
import { getToken } from '../../localStorage/controlLocalStorage';

export const Catalog = () => {
  const dispatch = useDispatch();
  const token = getToken();
  const catalog = useAppSelector(state => state.catalogList.catalogList);
  console.log('catalog: ', catalog);

  const isPagination = (useAppSelector(
    state => state.catalogList.totalPages)) > 1;

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
            isPagination && <Pagination />
          }

        </section>
      </Container>
    </>
  );
};
