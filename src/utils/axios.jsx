import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWEyYTRkNWExYjM5NGM1MGE2MDU2OGUzNWI3YTEyNSIsIm5iZiI6MTcyNzE2ODU2OC4wNTMwNTksInN1YiI6IjY2ZjE2NWNlMDMxNWI5MWY0NjNiMTI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o4sdl3HOeK5pSpFld0lKaiWMxPLsPmaLSBN14JoX3jw'
  }
});

export default instance;