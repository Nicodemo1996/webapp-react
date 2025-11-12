import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-3 bg-dark text-white">
      <Link to="/" className="text-white">
        WebApp Film & Libri
      </Link>
    </nav>
  );
}

export default Navbar;
