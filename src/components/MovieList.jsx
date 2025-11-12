import MovieCard from "./MovieCard.jsx";

function MovieList({ movies }) {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}

export default MovieList;
