export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');

export const clearToken = () => {
  localStorage.clear();
};

// export const getLike = () => JSON.parse(localStorage.getItem('liked'));

// export const setLike = (like: number) => {
//   const likedArr = JSON.parse(getLike()) || [];

//   likedArr.push(like);
//   localStorage.setItem('liked', JSON.stringify(likedArr));
// };


// export const removeLike = (like: number) => {
//   const likedArr = JSON.parse(getLike()) || [];

//   localStorage.setItem('liked',
//     JSON.stringify(likedArr.filter(item => item !== like)));
// };


// export const clearToken = () => {
//   localStorage.clear();
// };
