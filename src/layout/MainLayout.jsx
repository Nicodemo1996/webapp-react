import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Loader from "../components/Loader.jsx";
import { useLoader } from "../context/LoaderContext.jsx";

function MainLayout() {
  const { isLoading } = useLoader();

  return (
    <>
      <Navbar />
      {isLoading && <Loader />}
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
