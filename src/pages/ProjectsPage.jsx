import expenseTracker from "../assets/expense-tracker.jpg";
import stockMarketDashboard from "../assets/stock-market-dashboard.jpg";
import socialMediaAPI from "../assets/social-media.jpg";

export default function ProfilePage() {
  return (
    <div className="container">
      <p className="mt-1">Here are some of my projects:</p>
      <div className="row">
        <div className="col">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={expenseTracker}
              className="card-img-top"
              alt="Expense Tracker Project"
            />
            <div className="card-body">
              <h5 className="card-title">Expense Tracker Project</h5>
              <a
                href="https://tracker-of-expenses-5d12b9bcba5b.herokuapp.com/"
                className="btn btn-dark mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={stockMarketDashboard}
              className="card-img-top"
              alt="Stock Market Dashboard Project"
            />
            <div className="card-body">
              <h5 className="card-title">Stock Market Dashboard Project</h5>
              <a
                href="https://travisfowlston.github.io/Stock-Market-Dashboard/"
                className="btn btn-dark mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={socialMediaAPI}
              className="card-img-top"
              alt="Social Media API"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media API</h5>
              <a
                href="https://github.com/travisfowlston/Social-Network-API"
                className="btn btn-dark mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={socialMediaAPI}
              className="card-img-top"
              alt="Social Media API"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media API</h5>
              <a
                href="https://github.com/travisfowlston/Social-Network-API"
                className="btn btn-dark mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={socialMediaAPI}
              className="card-img-top"
              alt="Social Media API"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media API</h5>
              <a
                href="https://github.com/travisfowlston/Social-Network-API"
                className="btn btn-dark mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img
              src={socialMediaAPI}
              className="card-img-top"
              alt="Social Media API"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media API</h5>
              <a
                href="https://github.com/travisfowlston/Social-Network-API"
                className="btn btn-dark mt-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
