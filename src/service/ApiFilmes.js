import axios from "axios";

const apiFilmes = axios.create({
  baseURL: "http://191.252.92.39:8080", // Certifique-se de que essa é a baseURL correta
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getMovies() {
    return apiFilmes.get("/detona-movies-api");
  },

  getMovieById(id) {
    return apiFilmes.get(`/detona-movies-api/movie/${id}`);
  },
};
