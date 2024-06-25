/* eslint-disable max-len */
import { clearToken, getToken } from '../../localStorage/controlLocalStorage';
import style from './Button.module.css';
import ExitIcon from '../../../public/logoutIcon.svg?react';
import EntryIcon from '../../../public/entryIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registryStoreSlice } from '../../store/registryStore/registryStoreSlice';

export const Button = () => {
  const token = getToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (token) {
      dispatch(registryStoreSlice.actions.updateToken(''));
      clearToken();
    }
    navigate('/auth');
  };

  return (
    <>
      <button
        className={style.btn}
        onClick={handleLogout}
      >
        {token ? 'Выход' : 'Вход'}
      </button>
      <button className={style.btnTablet} onClick={handleLogout}>
        {token ? <span className={style.btnTabletExit}><ExitIcon /></span> : <EntryIcon/>}
      </button>
    </>
  );
};
