
import React from "react";
import { User, FileText, PlusCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-600">Welcome, Ajay</h2>
            <p className="text-gray-600">Here’s what’s happening today</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2">
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Link
            to="/report-issue"
            className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg shadow-md flex flex-col items-center transition"
          >
            <PlusCircle size={32} />
            <span className="mt-4 text-lg font-semibold">Report New Issue</span>
          </Link>

          <Link
            to="/user/issues"
            className="bg-white hover:shadow-lg p-6 rounded-lg border flex flex-col items-center transition"
          >
            <FileText size={32} className="text-green-600" />
            <span className="mt-4 text-lg font-semibold">View My Reports</span>
          </Link>

          <Link
            to="/user/profile"
            className="bg-white hover:shadow-lg p-6 rounded-lg border flex flex-col items-center transition"
          >
            <User size={32} className="text-green-600" />
            <span className="mt-4 text-lg font-semibold">My Profile</span>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-4">Quick Stats</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-700">12</p>
              <p className="text-gray-600">Total Issues Reported</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">4</p>
              <p className="text-gray-600">Pending Review</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">8</p>
              <p className="text-gray-600">Resolved</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
