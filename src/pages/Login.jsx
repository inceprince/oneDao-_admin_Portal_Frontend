import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import mountainsImg from "../assets/piccii.png";
import PrimaryButton from "../components/PrimaryButton";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    }
    return errs;
  }

  const errors = getErrors();

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
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 login-page">
      <div className="login-card w-100">
        <div className="row g-0 h-100">

          {/* Left — Illustration */}
          <div className="col-md-6 d-none d-md-block">
            <img src={mountainsImg} alt="Illustration" className="login-illustration" />
          </div>

          {/* Right — Form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-100 px-4 px-lg-5 py-5">

              <h2 className="fw-bold mb-2" style={{ fontSize: "25px", color: "#1a1a1a" }}>
                Log In to Admin Panel
              </h2>
              <p className="mb-4" style={{ fontSize: "14px", color: "#A7ACC4" }}>
                Enter your email id and password below
              </p>

              <form onSubmit={handleSubmit} noValidate>

                {/* Email */}
                <div className="mb-3">
                  <label className="login-label" htmlFor="email">EMAIL ID</label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control login-input ${showError("email") ? "is-invalid" : ""}`}
                    placeholder="Enter your email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    autoComplete="email"
                  />
                  {showError("email") && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="login-label" htmlFor="password">PASSWORD</label>
                  <div className="position-relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className={`form-control login-input login-password-input ${showError("password") ? "is-invalid" : ""}`}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => handleBlur("password")}
                      autoComplete="current-password"
                    />
                    {password.length > 0 && (
                      <button
                        type="button"
                        className="login-eye-toggle"
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

                {/* Submit */}
                <PrimaryButton
                  disabled={!isFormValid()}
                  loading={loading}
                  loadingText="Logging in..."
                >
                  Log In
                </PrimaryButton>

              </form>

              <p className="text-center mt-4 mb-0" style={{ fontSize: "14px", color: "#A7ACC4" }}>
                Don't have an account?{" "}
                <Link to="/register" className="text-dark fw-bold text-decoration-none">
                  Register
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
