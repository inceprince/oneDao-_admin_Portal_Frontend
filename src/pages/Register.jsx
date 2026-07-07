import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import mountainsImg from "../assets/piccii.png";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function getErrors() {
    const errs = {};
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!password) {
      errs.password = "Password is required.";
    } else if (password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
    }
    if (!confirmPassword) {
      errs.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    return errs;
  }

  const errors = getErrors();

  // show error only after field is touched or form is submitted
  function showError(field) {
    return (submitted || touched[field]) && errors[field];
  }

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function isFormValid() {
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/otp");
    }, 1000);
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
      <div className="register-card w-100">
        <div className="row g-0">

          {/* Left — Illustration */}
          <div className="col-md-6 d-none d-md-block">
            <img src={mountainsImg} alt="Illustration" className="register-illustration" />
          </div>

          {/* Right — Form */}
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="w-100 px-4 px-lg-5 py-5">

              <h2 className="fw-bold mb-2" style={{ fontSize: "28px", color: "#1a1a1a" }}>
                Register to Admin Panel
              </h2>
              <p className="mb-4" style={{ fontSize: "14px", color: "#A7ACC4" }}>
                Enter your phone number and password below
              </p>

              <form onSubmit={handleSubmit} noValidate>

              
                <div className="mb-4">

                  {/* Email */}
                  <div className="mb-3">
                    <label className="fw-bold text-uppercase text-dark mb-1 register-label" htmlFor="email">
                      EMAIL ID
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`form-control register-input ${showError("email") ? "is-invalid" : ""}`}
                      placeholder="Enter your email id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      required
                      autoComplete="email"
                    />
                    {showError("email") && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="fw-bold text-uppercase text-dark mb-1 register-label" htmlFor="password">
                      PASSWORD
                    </label>
                    <div className="position-relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className={`form-control register-input register-password-input ${showError("password") ? "is-invalid" : ""}`}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => handleBlur("password")}
                        required
                        autoComplete="new-password"
                      />
                      {password.length > 0 && (
                        <button
                          type="button"
                          className="eye-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                      )}
                      {showError("password") && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>
                  </div>

                
                  <div>
                    <label className="fw-bold text-uppercase text-dark mb-1 register-label" htmlFor="confirmPassword">
                      CONFIRM PASSWORD
                    </label>
                    <div className="position-relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className={`form-control register-input register-password-input ${showError("confirmPassword") ? "is-invalid" : ""}`}
                        placeholder="Enter your confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => handleBlur("confirmPassword")}
                        required
                        autoComplete="new-password"
                      />
                      {confirmPassword.length > 0 && (
                        <button
                          type="button"
                          className="eye-toggle"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                        >
                          <i className={`fa-regular ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                      )}
                      {showError("confirmPassword") && (
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn register-btn w-100"
                  disabled={!isFormValid() || loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Registering...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>

              </form>

              <p className="text-center text-muted mt-4 mb-0" style={{ fontSize: "14px" }}>
                Already have an account?{" "}
                <Link to="/login" className="text-dark fw-bold text-decoration-none">
                  Login
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
