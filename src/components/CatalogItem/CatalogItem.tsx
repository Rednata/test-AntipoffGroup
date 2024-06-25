/* eslint-disable max-len */
import { useState } from 'react';
import style from './CatalogItem.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { catalogStoreSlice } from '../../store/catalogStore/catalogStoreSlice';

type Props = {
  data: {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string,
    isLike: boolean,
  }
}

export const CatalogItem = (
    { data: { id, first_name: firstName, last_name: lastName, avatar, isLike } }: Props) => {
  const fullName = `${firstName} ${lastName}`;

  const dispatch = useDispatch();

  const [isLikeBtn, setIsLikeBtn] = useState(isLike);

  const handleLikeBtn = () => {
    setIsLikeBtn(!isLikeBtn);
    dispatch(catalogStoreSlice.actions.updateCatalogListLiked({ id, isLikeBtn: !isLikeBtn }));
  };

  return (
    <li className={style.item}>
      <div className={style.card__content}>
        <Link to={`card#${id}`}>
          <img
            className={style.img}
            src={avatar}
            alt={`Аватар ${fullName}`}
            width="124" height="124"
          />
          <h3 className={style.title}>
            {fullName}
          </h3>
        </Link>
      </div>
      <button className={isLikeBtn ? `${style.btnLike} ${style.btnActive}` : `${style.btnLike}` } onClick={handleLikeBtn}>
        {isLikeBtn ? (<svg width="30" height="28" viewBox="0 0 30 28" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.85 8C9.72375 8 8 9.72173 8 11.8455C8 15.691 12.55 19.1869 15 20C17.45 19.1869 22 15.691 22 11.8455C22 9.72173 20.2762 8 18.15 8C16.848 8 15.6965 8.64569 15 9.63398C14.645 9.1289 14.1734 8.71669 13.625 8.43226C13.0767 8.14784 12.4679 7.99956 11.85 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>) : (
          <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.85 8C9.72375 8 8 9.72173 8 11.8455C8 15.691 12.55 19.1869 15 20C17.45 19.1869 22 15.691 22 11.8455C22 9.72173 20.2762 8 18.15 8C16.848 8 15.6965 8.64569 15 9.63398C14.645 9.1289 14.1734 8.71669 13.625 8.43226C13.0767 8.14784 12.4679 7.99956 11.85 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
        }
      </button>

    </li>
  );
};
