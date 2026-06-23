import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const token = useSelector((state) => state.auth.token);

  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">JobBot</h1>

      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {!token ? (
        <div className="flex gap-3">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <UserCircle size={35} />
      )}
    </nav>
  );
}