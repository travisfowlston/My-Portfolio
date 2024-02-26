import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Nav({ currentPage }) {
  const pages = ["Projects", "Resume", "Contact"];

  return (
    <nav className="navbar navbar-expand-lg bg-dark z-depth-4">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faCode} style={{ color: "white" }} /> Travis
          Fowlston's Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {pages.map((page, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={`/${page.toLowerCase().replace(" ", "-")}`}
                  className={`nav-link ${currentPage === page ? "active" : ""}`}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
