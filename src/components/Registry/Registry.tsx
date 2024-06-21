import { Container } from '../Container/Container';
import style from './Registry.module.css';
import CloseEyeIcon from '../../assets/close-eye-password.svg?react';
import ShowEyeIcon from '../../assets/show-eye-password.svg?react';

export const Registry = () => {
  console.log();

  return (
    <div className={style.wrap}>
      <form className={style.form}>
        <h2 className={style.title}>
        Регистрация
        </h2>
        <label htmlFor="" className={style.label}>Имя
          <input
            type="text" className={`${style.input}`} placeholder='Артур'/>
        </label>
        <label htmlFor="" className={style.label}>Электронная почта
          <input
            type="email"
            className={`${style.input}`}
            placeholder='example@mail.ru'
          />
        </label>
        <label htmlFor="" className={style.label}>Пароль
          <div className={style.inputWrap}>
            <input type="password" className={`${style.input}`}/>
            <button
              className={`${style.btnPassword} ${style.btnPasswordClose}`}>
              <CloseEyeIcon />
            </button>
          </div>
        </label>
        <label htmlFor="" className={style.label}>Подтвердите пароль
          <div className={style.inputWrap}>
            <input type="password" className={`${style.input}`}/>
            <button
              className={`${style.btnPassword} ${style.btnPasswordClose}`}>
              <CloseEyeIcon />
            </button>
          </div>
        </label>
        <button
          type='submit'
          className={style.btnSubmit}
        >Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

