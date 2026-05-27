import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="page landing">
      <div className="landing-content">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="button-stack">
          <Link className="btn btn-primary" to="/signup">
            Create Account
          </Link>
          <Link className="btn btn-secondary" to="/login">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Landing;
