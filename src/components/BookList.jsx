function BookList({ books }) {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {books.map((b) => (
        <div className="card p-2" key={b.id}>
          <img src={b.cover} alt={b.title} />
          <h5>{b.title}</h5>
          <p>{b.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
