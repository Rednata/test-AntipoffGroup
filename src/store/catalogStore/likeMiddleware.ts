import {
  getLike, removeLike, setLike
} from '../../localStorage/controlLocalStorage';

export const likeMiddleware = (store) => (next) => (action) => {
  if (action.type === 'catalogList/updateCatalogListLiked') {
    if (action.payload.isLikeBtn) {
      setLike(action.payload);
    } else {
      removeLike(action.payload);
    }
  }
  if (action.type === 'catalogList/catalogRequestSuccess') {
    const likedArr = getLike();
    if (likedArr) {
      const data = action.payload.data.data.map(elem => {
        likedArr.forEach(likeElem => {
          if (elem.id === likeElem.id) {
            elem = { ...elem, isLike: likeElem.isLikeBtn };
          }
        });
        if (!('isLike' in elem)) {
          elem = {...elem, isLike: false};
        }
        return elem;
      });
      action.payload.data = data;
    } else {
      const data = action.payload.data.data
        .map(elem => ({ ...elem, isLike: false }));
      action.payload.data = data;
    }
  }
  next(action);
};
