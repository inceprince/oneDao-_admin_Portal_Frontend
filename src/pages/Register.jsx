import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Register Page</h1>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/otp')}>
        Go to OTP
      </button>
    </div>
  );
}

export default Register;
