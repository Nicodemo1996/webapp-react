import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card p-2">
      <img src={movie.poster} alt={movie.title} />
      <h5>{movie.title}</h5>
      <Link to={`/movies/${movie.id}`}>Dettagli</Link>
    </div>
  );
}

export default MovieCard;
