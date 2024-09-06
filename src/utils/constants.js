export const NETFLIX_HOMEPAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg";

export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";


// const nowplaying_token = process.env.NOWPLAYING_TOKEN;
// console.log(nowplaying_token);
// const popular_token = process.env.POPULAR_TOKEN;
// const topRated_token = process.env.TOPRATED_TOKEN;

export const NOWPLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const URL_OPTIONS = {

  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_NOWPLAYING_TOKEN,
  }
};


export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const POPULAR_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_POPULAR_TOKEN,
  }
};



export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const TOP_RATED_OPTIONS = {
  method: 'GET',

  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_TOPRATED_TOKEN,
  }
};

export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const UPCOMING_MOVIES_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_UPCOMING_TOKEN,
  }
};




export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500";

