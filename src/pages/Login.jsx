import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="page form-page">
      <header className="form-header">
        <button
          type="button"
          className="back-button"
          aria-label="Back"
          onClick={() => navigate("/")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="title">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </header>
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <label className="field">
          <span className="field-label">Email Address</span>
          <input
            type="email"
            placeholder="Enter email address"
            className="field-input"
          />
        </label>
        <label className="field">
          <span className="field-label">Password</span>
          <input
            type="password"
            placeholder="Enter password"
            className="field-input"
          />
        </label>
        <button
          type="button"
          className="btn btn-disabled"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
