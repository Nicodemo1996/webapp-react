import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// MOVIES
export const getMovies = () => api.get("/movies");
export const getMovieById = (id) => api.get(`/movies/${id}`);
export const getMovieReviews = (id) => api.get(`/movies/${id}/reviews`);
export const createReview = (id, data) =>
  api.post(`/movies/${id}/reviews`, data);

// BOOKS
export const getBooks = () => api.get("/books");

export default api;
