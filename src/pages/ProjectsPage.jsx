import expenseTracker from "../assets/expense-tracker.jpg";
import stockMarketDashboard from "../assets/stock-market-dashboard.jpg";
import socialMediaAPI from "../assets/social-media.jpg";
import codeQuiz from "../assets/code-quiz.jpg";
import noteTaker from "../assets/note-taker.jpg";
import workdayScheduler from "../assets/workday-scheduler.jpg";

const projects = [
  {
    title: "Social Media API",
    image: socialMediaAPI,
    link: "https://github.com/travisfowlston/Social-Network-API",
  },
  {
    title: "Expense Tracker Project",
    image: expenseTracker,
    link: "https://tracker-of-expenses-5d12b9bcba5b.herokuapp.com/",
  },
  {
    title: "Stock Market Dashboard Project",
    image: stockMarketDashboard,
    link: "https://travisfowlston.github.io/Stock-Market-Dashboard/",
  },
  {
    title: "JavaScript Code Quiz",
    image: codeQuiz,
    link: "https://travisfowlston.github.io/Code-Quiz/",
  },
  {
    title: "Note Taker App",
    image: noteTaker,
    link: "https://stormy-oasis-52059-1e4efd1e0e15.herokuapp.com/",
  },
  {
    title: "Work-day Scheduler App",
    image: workdayScheduler,
    link: "https://travisfowlston.github.io/Work-Day-Scheduler/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <p className="mt-1">Here are some of my projects:</p>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <a
              href={project.link}
              target="_blank"
              className="card text-center"
              style={{ width: "20rem", textDecoration: "none" }}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
