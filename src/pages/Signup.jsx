import { useNavigate } from "react-router-dom";

function Signup() {
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
          Create your
          <br />
          PopX account
        </h1>
      </header>
      <form className="form signup-form" onSubmit={(event) => event.preventDefault()}>
        <label className="field">
          <span className="field-label">Full Name*</span>
          <input type="text" className="field-input" value="Marry Doe" readOnly />
        </label>
        <label className="field">
          <span className="field-label">Phone number*</span>
          <input type="text" className="field-input" value="Marry Doe" readOnly />
        </label>
        <label className="field">
          <span className="field-label">Email address*</span>
          <input type="text" className="field-input" value="Marry Doe" readOnly />
        </label>
        <label className="field">
          <span className="field-label">Password *</span>
          <input type="text" className="field-input" value="Marry Doe" readOnly />
        </label>
        <label className="field">
          <span className="field-label">Company name</span>
          <input type="text" className="field-input" value="Marry Doe" readOnly />
        </label>
        <div className="field radio-group">
          <span className="field-label">Are you an Agency?*</span>
          <div className="radio-options">
            <label className="radio">
              <input type="radio" name="agency" defaultChecked />
              <span>Yes</span>
            </label>
            <label className="radio">
              <input type="radio" name="agency" />
              <span>No</span>
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </form>
    </main>
  );
}

export default Signup;
