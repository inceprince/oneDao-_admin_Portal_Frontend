import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Dashboard Page</h1>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
        Go to Register
      </button>
    </div>
  );
}

export default Dashboard;
