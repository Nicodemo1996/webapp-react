import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getMovieById,
  getMovieReviews,
  createReview,
} from "../services/api.js";
import ReviewForm from "../components/ReviewForm.jsx";
import { useLoader } from "../context/LoaderContext.jsx";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const fetchAll = async () => {
      showLoader();
      try {
        const mov = await getMovieById(id);
        const rev = await getMovieReviews(id);
        setMovie(mov.data);
        setReviews(rev.data);
      } finally {
        hideLoader();
      }
    };

    fetchAll();
  }, [id]);

  const handleReview = async (data) => {
    showLoader();
    try {
      const res = await createReview(id, data);
      setReviews([...reviews, res.data]);
    } finally {
      hideLoader();
    }
  };

  if (!movie) return null;

  return (
    <div>
      <Link to="/">← Torna alla home</Link>

      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <h3 className="mt-4">Recensioni</h3>
      {reviews.length === 0 ? (
        <p>Nessuna recensione.</p>
      ) : (
        <ul>
          {reviews.map((r) => (
            <li key={r.id}>
              <b>{r.author}</b> – voto {r.rating}
              <br />
              {r.content}
            </li>
          ))}
        </ul>
      )}

      <ReviewForm onSubmit={handleReview} />
    </div>
  );
}

export default MovieDetail;
