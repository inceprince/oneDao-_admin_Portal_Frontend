import { useNavigate } from 'react-router-dom';

function Otp() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>OTP Page</h1>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/login')}>
        Go to Login
      </button>
    </div>
  );
}

export default Otp;
