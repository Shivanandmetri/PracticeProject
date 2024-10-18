import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  //   let navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>

      {/* This is where nested routes will render */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
