import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mountainsImg from "../assets/piccii.png";
import PrimaryButton from "../components/PrimaryButton";
import "./Otp.css";

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  function handleChange(index, value) {
    if (!/^\d?$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const updated = [...otp];
    pasted.split("").forEach((char, i) => {
      updated[i] = char;
    });
    setOtp(updated);
    const nextEmpty = pasted.length < 6 ? pasted.length : 5;
    inputs.current[nextEmpty]?.focus();
  }

  const isComplete = otp.every((d) => d !== "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!isComplete) return;
    navigate("/login");
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
      <div className="otp-card w-100">
        <div className="row g-0 h-100">

          {/* Left — Illustration */}
          <div className="col-md-6 d-none d-md-block">
            <img src={mountainsImg} alt="Illustration" className="otp-illustration" />
          </div>

          {/* Right — Form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-100 px-4 px-lg-5 py-5 text-center">

              <h2 className="fw-bold mb-2" style={{ fontSize: "28px", color: "#1a1a1a" }}>
                Verify your email
              </h2>
              <p className="mb-4" style={{ fontSize: "14px", color: "#A7ACC4" }}>
                Enter the OTP from your register email id
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="otp-inputs d-flex justify-content-center gap-2 mb-4">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => (inputs.current[i] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      className="otp-box"
                      value={digit}
                      onChange={(e) => handleChange(i, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                      onPaste={i === 0 ? handlePaste : undefined}
                      autoFocus={i === 0}
                    />
                  ))}
                </div>

                <PrimaryButton disabled={!isComplete}>
                  Proceed
                </PrimaryButton>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Otp;
