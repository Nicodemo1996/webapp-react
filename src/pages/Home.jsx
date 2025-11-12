import { useEffect, useState } from "react";
import { getMovies, getBooks } from "../services/api.js";
import MovieList from "../components/MovieList.jsx";
import BookList from "../components/BookList.jsx";
import { useLoader } from "../context/LoaderContext.jsx";

function Home() {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const fetchData = async () => {
      showLoader();
      try {
        const [m, b] = await Promise.all([getMovies(), getBooks()]);
        setMovies(m.data);
        setBooks(b.data);
      } finally {
        hideLoader();
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Film</h1>
      <MovieList movies={movies} />

      <h1 className="mt-5">Libri</h1>
      <BookList books={books} />
    </div>
  );
}

export default Home;
