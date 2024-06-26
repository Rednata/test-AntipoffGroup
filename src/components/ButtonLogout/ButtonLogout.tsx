/* eslint-disable max-len */
import { clearToken, getToken } from '../../localStorage/controlLocalStorage';
import style from './ButtonLogout.module.css';
import ExitIcon from '../../assets/logoutIcon.svg?react';
import EntryIcon from '../../assets/entryIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import { registryStoreSlice } from '../../store/registryStore/registryStoreSlice';
import { useAppDispatch } from '../../store/store';

export const ButtonLogout = () => {
  const token = getToken();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      <button
        className={style.btnTablet}
        onClick={handleLogout}
        aria-label={token ? 'Выход' : 'Вход'}
      >
        {token ? <span className={style.btnTabletExit}><ExitIcon /></span> : <EntryIcon/>}
      </button>
    </>
  );
};
