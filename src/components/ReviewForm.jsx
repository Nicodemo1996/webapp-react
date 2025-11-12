import { useState } from "react";

function ReviewForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const handle = (e) => {
    e.preventDefault();
    onSubmit({ author, content, rating });
    setAuthor("");
    setContent("");
    setRating(5);
  };

  return (
    <form onSubmit={handle} className="mt-4">
      <h4>Lascia una recensione</h4>

      <input
        className="form-control my-2"
        placeholder="Nome"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        className="form-control my-2"
        type="number"
        min="1"
        max="10"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <textarea
        className="form-control my-2"
        placeholder="Recensione"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="btn btn-success">Invia</button>
    </form>
  );
}

export default ReviewForm;
