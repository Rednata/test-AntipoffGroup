/* eslint-disable max-len */
import style from './ButtonBack.module.css';

export const ButtonBack = () => {
  console.log();

  return (
    <>
      <button className={style.btn}>Назад</button>
      <button className={style.btnTablet}>
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z" fill="#F8F8F8" />
        </svg>
      </button>
    </>
  );
};
