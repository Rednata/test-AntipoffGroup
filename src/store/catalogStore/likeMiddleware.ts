import { Action, IItem } from '../../types&Interface';
import {
  getLike, removeLike, setLike
} from '../../localStorage/controlLocalStorage';
import { Dispatch } from '@reduxjs/toolkit';

export const likeMemberMiddleware = () => (next) =>
  (action) => {
    if (action.type === 'catalogList/updateCatalogListLiked') {
      console.log('action: ', action);
      if (action.payload.isLikeBtn) {
        setLike(action.payload);
      } else {
        removeLike(action.payload);
      }
    }
    next(action);
  };

export const likeMiddleware = () => (next) =>
  (action) => {
    if (action.type === 'catalogList/catalogRequestSuccess') {
      console.log('action: ', action);
      const likedArr = getLike();
      if (likedArr) {
        const data = action.payload.data.map((elem: IItem) => {
          likedArr.forEach((likeElem: { id: number, isLikeBtn: boolean }) => {
            if (elem.id === likeElem.id) {
              elem = { ...elem, isLike: likeElem.isLikeBtn };
            }
          });
          if (!(Object.prototype.hasOwnProperty.call(elem, 'isLike'))) {
            elem = { ...elem, isLike: false };
          }
          return elem;
        });
        action.payload.data = data;
      } else {
        const data = action.payload.data
          .map((elem: IItem) => ({ ...elem, isLike: false }));
        action.payload.data = data;
      }
    }
    next(action);
  };
