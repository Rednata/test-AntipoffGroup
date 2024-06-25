//  ==================  TOKEN  ==================
//  ==================  TOKEN  ==================

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');

export const clearToken = () => {
  localStorage.clear();
};

//  ==================  LIKED  ==================
//  ==================  LIKED  ==================

export const getLike = () => JSON.parse(localStorage.getItem('liked'));

export const setLike = (like: { id: number, isLikeBtn: boolean }) => {
  const likedArr = getLike() || [];
  likedArr.push(like);
  localStorage.setItem('liked', JSON.stringify(likedArr));
};

export const removeLike = (like: { id: number, isLikeBtn: boolean }) => {
  const likedArr = getLike() || [];
  localStorage.setItem('liked',
    JSON.stringify(likedArr.filter(item => item.id !== like.id)));
};

