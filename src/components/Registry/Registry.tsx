import style from './Registry.module.css';
import CloseEyeIcon from '../../assets/close-eye-password.svg?react';
import ShowEyeIcon from '../../assets/show-eye-password.svg?react';
import { useEffect, useState } from 'react';
import {
  registryRequestAsync
} from '../../store/registryStore/registryActionRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, useAppSelector } from '../../store/store';

export const Registry = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useAppSelector(state => state.token.token);

  const navigate = useNavigate();

  const [isInputValidate, setIsInputValidate] = useState({
    name: true,
    email: true,
    password: true,
    repeatPassword: true
  });

  const [isFormValidate, setIsFormValidate] = useState(false);

  const errorMessages = {
    name: 'только цифры, латинские буквы и _ . Не менее 3 символов',
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

  const validateForm = () => {
    const reg1 = /^\w{3,}$/gi;
    // const reg1 = /[a-z0-9]{5,}/gi;
    const reg2 = (authInfo.email === 'eve.holt@reqres.in');
    const reg3 = /.{5,}/;
    const reg4 = (authInfo.password === authInfo.repeatPassword);

    setIsInputValidate({ ...isInputValidate,
      name: reg1.test(authInfo.name),
      email: reg2,
      password: reg3.test(authInfo.password),
      repeatPassword: reg4
    });
  };

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

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
  };

  useEffect(() => {
    setIsFormValidate(() =>
      Object.values(isInputValidate).every((elem) => elem === true) &&
      Object.values(authInfo).every((elem) => elem.length));
  }, [isInputValidate]);

  useEffect(() => {
    if (isFormValidate) {
      dispatch(registryRequestAsync(authInfo));
    }
  }, [isFormValidate]);

  useEffect(() => {
    if (token) {
      navigate('/team');
    }
  }, [token, navigate]);

  return (
    <div className={style.wrap}>
      <div className={style.warning}>
        <p>Внимание! Проект учебный.</p>
        <p>Просьба НЕ вводить личную информацию</p>
      </div>
      <form className={style.form} onSubmit={handleSubmitForm}>
        <div className={style.formContent}>
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
              title='только цифры, латинские буквы и _ . Не менее 3 символов'
              placeholder='Артур'
              autoComplete='off'
            />
            {!isInputValidate.name &&
            (<span className={style.warnMessage}>
              Ошибка: <span>{errorMessages.name}</span></span>)
            }
          </label>

          <label htmlFor="" className={style.label}>Электронная почта
            <input
              className={isInputValidate.email ?
                `${style.input}` : `${style.input} ${style.inputWarn}`}
              onChange={handleInputAuthInfo}
              value={authInfo.email}
              name='email'
              type="email"
              required
              // placeholder='example@mail.ru'
              placeholder='eve.holt@reqres.in'
              autoComplete='off'
              title='Работает только с почтой eve.holt@reqres.in'
            />
            {!isInputValidate.email &&
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
                type='button'
                onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <ShowEyeIcon /> : <CloseEyeIcon />}
              </button>
            </div>
            {!isInputValidate.password &&
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
                type='button'
                onClick={() => setIsShowRepeatPassword(!isShowRepeatPassword)}>
                {isShowRepeatPassword ? <ShowEyeIcon /> : <CloseEyeIcon />}
              </button>
            </div>
            {!isInputValidate.repeatPassword &&
            (<span className={style.warnMessage}>
              Ошибка: <span>{errorMessages.repeatPassword}</span></span>)
            }
          </label>
        </div>

        <button
          type='submit'
          className={style.btnSubmit}
        >Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

