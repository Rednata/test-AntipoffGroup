import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';
import { CatalogItem } from '../CatalogItem/CatalogItem';

import { Container } from '../Container/Container';
// import { Hero } from "../Hero/Hero";
import style from './Catalog.module.css';

export const Catalog = () => {
  console.log();

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
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
          </ul>
          <ButtonLoadMore />
        </section>
      </Container>
    </>
  );
};
