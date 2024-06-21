/* eslint-disable max-len */
import style from './CatalogItem.module.css';
import photo from '../../assets/ellipse.jpg';
import { Link } from 'react-router-dom';

export const CatalogItem = () => {
  console.log();

  return (
    <li className={style.item}>
      <a href="teams/card#">
        <img
          className={style.img}
          src={photo}
          alt="Аватар"
          width="124" height="124"
        />
        <div className={style.card__content}>
          <h3 className={style.title}>
            Артур Королёв
          </h3>
          <button className={style.btnLike}>
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.85 8C9.72375 8 8 9.72173 8 11.8455C8 15.691 12.55 19.1869 15 20C17.45 19.1869 22 15.691 22 11.8455C22 9.72173 20.2762 8 18.15 8C16.848 8 15.6965 8.64569 15 9.63398C14.645 9.1289 14.1734 8.71669 13.625 8.43226C13.0767 8.14784 12.4679 7.99956 11.85 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </a>
    </li>
  );
};
