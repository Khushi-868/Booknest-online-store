import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminDashboard = () => {
  const [authUser] = useAuth();
  const [stats, setStats] = useState({ users: 0, books: 0 });

  // 🔐 ADMIN PROTECTION
  if (!authUser || authUser.role !== "admin") {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (!authUser?.token) return;

    axios.get("http://localhost:4001/admin/stats", {
      headers: {
        Authorization: `Bearer ${authUser.token}`,
      },
    })
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, [authUser]);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 rounded">
            <h2>Total Users</h2>
            <p className="text-2xl">{stats.users}</p>
          </div>

          <div className="p-4 bg-green-100 rounded">
            <h2>Total Books</h2>
            <p className="text-2xl">{stats.books}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
