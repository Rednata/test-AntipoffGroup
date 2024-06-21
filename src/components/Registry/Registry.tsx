import style from './Registry.module.css';
import CloseEyeIcon from '../../assets/close-eye-password.svg?react';
import ShowEyeIcon from '../../assets/show-eye-password.svg?react';
import { useEffect, useState } from 'react';
import { useAuthInfo } from '../../hooks/useAuthInfo';

export const Registry = () => {
  const [isValidate, setIsValidate] = useState({
    name: true,
    email: true,
    password: true,
    repeatPassword: true
  });

  const errorMessages = {
    name: 'только латинские буквы и цифры. Не менее 3 символов',
    email: 'обязательно присутствие "@" и хотя бы по одному символу до и после',
    password: 'длина пароля не менее 5 символов',
    repeatPassword: 'пароли должны совпадать'
  };

  const [authInfo, setAuthInfo] = useState(
    {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);

  const handleInputAuthInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setAuthInfo({ ...authInfo, name: e.target.value });
        break;
      case 'email':
        setAuthInfo({ ...authInfo, email: e.target.value });
        break;
      case 'password':
        setAuthInfo({ ...authInfo, password: e.target.value });
        break;
      case 'repeatPassword':
        setAuthInfo({ ...authInfo, repeatPassword: e.target.value });
        break;
    }
  };

  const validateForm = () => {
    const reg1 = /[^a-z0-9]{1,}/gi;
    const reg2 = /.+@.+/;
    const reg3 = /.{5,}/;
    const reg4 = (authInfo.password === authInfo.repeatPassword);

    setIsValidate({...isValidate,
      name: !(reg1.test(authInfo.name)),
      email: reg2.test(authInfo.email),
      password: reg3.test(authInfo.password),
      repeatPassword: reg4
    });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
    if (Object.values(isValidate).every((elem) => elem === true)) {
      console.log('===========');
    }
  };

  return (
    <div className={style.wrap}>
      <div className={style.warning}>
        <p>Внимание! Проект учебный.</p>
        <p>Просьба НЕ вводить личную информацию</p>
      </div>
      <form className={style.form} onSubmit={handleSubmitForm}>
        <h2 className={style.title}>
        Регистрация
        </h2>
        <label htmlFor="" className={style.label}>Имя
          <input
            className={`${style.input}`}
            onChange={handleInputAuthInfo}
            value={authInfo.name}
            name='name'
            type="text"
            required
            title='только латинские буквы и цифры. Не менее 3 символов'
            placeholder='Артур'/>
          {!isValidate.name &&
           (<span className={style.warnMessage}>
            Ошибка: <span>{errorMessages.name}</span></span>)
          }
        </label>

        <label htmlFor="" className={style.label}>Электронная почта
          <input
            className={isValidate.email ?
              `${style.input}` : `${style.input} ${style.inputWarn}`}
            onChange={handleInputAuthInfo}
            value={authInfo.email}
            name='email'
            type="text"
            required
            placeholder='example@mail.ru'
          />
          {!isValidate.email &&
          (<span className={style.warnMessage}>
            Ошибка: <span>{errorMessages.email}</span></span>)
          }
        </label>

        <label htmlFor="" className={style.label}>Пароль
          <div className={style.inputWrap}>
            <input
              className={`${style.input}`}
              onChange={handleInputAuthInfo}
              value={authInfo.password}
              name='password'
              type={isShowPassword ? 'text' : 'password'}
              title='длина пароля не менее 5 символов'
              required
            />
            <button
              className={`${style.btnPassword}`}
              onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <ShowEyeIcon /> : <CloseEyeIcon />}
            </button>
          </div>
          {!isValidate.password &&
          (<span className={style.warnMessage}>
            Ошибка: <span>{errorMessages.password}</span></span>)
          }
        </label>

        <label htmlFor="" className={style.label}>Подтвердите пароль
          <div className={style.inputWrap}>
            <input
              className={`${style.input}`}
              onChange={handleInputAuthInfo}
              value={authInfo.repeatPassword}
              name='repeatPassword'
              type={isShowRepeatPassword ? 'text' : 'password'}
              required
            />
            <button
              className={`${style.btnPassword}`}
              onClick={() => setIsShowRepeatPassword(!isShowRepeatPassword)}>
              {isShowRepeatPassword ? <ShowEyeIcon /> : <CloseEyeIcon />}
            </button>
          </div>
          {!isValidate.repeatPassword &&
          (<span className={style.warnMessage}>
            Ошибка: <span>{errorMessages.repeatPassword}</span></span>)
          }
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

