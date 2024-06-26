import { useAppSelector } from '../../store/store';
import style from './Pagination.module.css';

export const Pagination = () => {
  const countPages = useAppSelector(state => state.catalogList.totalPages);

  return (
    <div className={style.pagination}>
      <button
        className={`${style.btn} ${style.left}`} disabled>{'\u25C0'}
      </button>
      <ul className={style.switches}>
        <li className={`${style.switch} ${style.active}`} data-num='0'>1</li>
        <li className={style.switch} data-num='1'>{countPages}</li>
      </ul>
      <button
        className={`${style.btn} ${style.right}`} disabled>{'\u25B6'}
      </button>
    </div>
  );
};
