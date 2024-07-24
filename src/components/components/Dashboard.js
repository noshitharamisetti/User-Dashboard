import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || {}; // Handle the case if user is not passed

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-screen h-screen flex flex-col justify-content-center items-center" >
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Welcome, {user.firstName} {user.lastName}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Address:</strong> {user.address?.address}, {user.address?.city}</p>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
