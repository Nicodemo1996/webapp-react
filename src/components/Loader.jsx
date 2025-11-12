function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner" />
      <p style={{ color: "white" }}>Caricamento...</p>
    </div>
  );
}

export default Loader;
