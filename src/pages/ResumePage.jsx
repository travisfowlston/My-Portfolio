import resume from "../assets/Travis Fowlston Full Stack Web Developer.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="container">
      <div className="mt-4 mb-4">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFileArrowDown}
            size="2x"
            style={{ color: "#212529" }}
            className="icon"
            bounce
          />
        </a>
        <p>Download my resume here!</p>
      </div>
      <div className="mt-4 mb-4">
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="mt-4 mb-4">
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
