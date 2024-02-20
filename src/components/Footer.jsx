import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid mt-lg-5 p-lg-3 d-flex justify-content-between align-items-center bg-dark">
        <div className="text-center">
          <p className="trademark">&copy; Travis Fowlston 2024</p>
        </div>
        <div>
          <ul className="list-inline ms-auto">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/travis-fowlston-1b502b19a/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "#ee9b00" }}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/travisfowlston">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "#ee9b00" }}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://stackoverflow.com/users/23445379/travis-fowlston?tab=profile">
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  size="2x"
                  style={{ color: "#ee9b00" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
