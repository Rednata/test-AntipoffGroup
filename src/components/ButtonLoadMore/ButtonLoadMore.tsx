/* eslint-disable max-len */
import style from './ButtonLoadMore.module.css';
import { catalogRequestAsync } from '../../store/catalogStore/catalogActionRequest';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const ButtonLoadMore = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.catalogList.currentPage);

  const handleLoadMoreItems = () => {
    dispatch(catalogRequestAsync(currentPage));
  };

  return (
    <button className={style.btn} onClick={handleLoadMoreItems}>
      Показать еще
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.497 7.98903L12 15.297L4.50299 7.98903C4.36905 7.85819 4.18923 7.78495 4.00199 7.78495C3.81475 7.78495 3.63494 7.85819 3.50099 7.98903C3.43614 8.05257 3.38461 8.12842 3.34944 8.21213C3.31426 8.29584 3.29614 8.38573 3.29614 8.47653C3.29614 8.56733 3.31426 8.65721 3.34944 8.74092C3.38461 8.82463 3.43614 8.90048 3.50099 8.96403L11.4765 16.74C11.6166 16.8765 11.8044 16.953 12 16.953C12.1956 16.953 12.3834 16.8765 12.5235 16.74L20.499 8.96553C20.5643 8.90193 20.6162 8.8259 20.6517 8.74191C20.6871 8.65792 20.7054 8.56769 20.7054 8.47653C20.7054 8.38537 20.6871 8.29513 20.6517 8.21114C20.6162 8.12715 20.5643 8.05112 20.499 7.98753C20.365 7.85669 20.1852 7.78345 19.998 7.78345C19.8108 7.78345 19.6309 7.85669 19.497 7.98753V7.98903Z" fill="#151317" />
      </svg>
    </button>
  );
};
