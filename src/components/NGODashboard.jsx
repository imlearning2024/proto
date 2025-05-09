
import React, { useState } from "react";
import { MapPin, User, CheckCircle, Send } from "lucide-react";

const initialIssues = [
  {
    id: 1,
    type: "Water Pollution",
    description: "Contaminated water near the Yamuna river.",
    location: "Delhi, India",
    username: "Ravi Kumar",
    resolved: false,
  },
  {
    id: 2,
    type: "Soil Degradation",
    description: "Construction waste dumped in farmland.",
    location: "Meerut, Uttar Pradesh",
    username: "Sneha Sharma",
    resolved: false,
  },
];

const NGODashboard = () => {
  const [issues, setIssues] = useState(initialIssues);

  const markResolved = (id) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, resolved: true } : issue
      )
    );
  };

  const sendToGovernment = (issue) => {
    console.log("Sending issue to government:", issue);
    alert(`Issue "${issue.type}" sent to government authority.`);
    // You can integrate a POST request to your backend here
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6">NGO Dashboard</h1>

      {issues.length === 0 ? (
        <p className="text-gray-600">No issues reported yet.</p>
      ) : (
        <div className="grid gap-6">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-green-700">
                  {issue.type}
                </span>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded ${
                    issue.resolved
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {issue.resolved ? "Resolved" : "Pending"}
                </span>
              </div>

              <p className="text-gray-700 mb-2">{issue.description}</p>

              <div className="text-sm text-gray-600 mb-4 flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> {issue.location}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} /> Reported by: {issue.username}
                </span>
              </div>

              <div className="flex gap-3">
                {!issue.resolved && (
                  <button
                    onClick={() => markResolved(issue.id)}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    <CheckCircle size={16} />
                    Mark as Resolved
                  </button>
                )}
                <button
                  onClick={() => sendToGovernment(issue)}
                  className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50 transition"
                >
                  <Send size={16} />
                  Send to Government
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NGODashboard;
