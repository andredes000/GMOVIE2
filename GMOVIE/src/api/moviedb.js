import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTQ2NWRmYzg4MWJkNGUxYTQ2Mzc0YmVlOWM2OWE4OCIsInN1YiI6IjVlNGM5YzhmOWEzYzQ5MDAxMjM0MGQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d0fh16MNk0c8LapwwtW_cBWtKB2qzszPcY_BOBVFcDI',
  },
});
