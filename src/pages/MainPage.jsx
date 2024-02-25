import { useEffect } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import { Outlet } from "react-router-dom";

export default function MainPage({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <div className="container mt-4">
        <h1>{capitalizeFirstLetter(currentPage)}</h1>
      </div>
      <Outlet />
    </section>
  );
}
