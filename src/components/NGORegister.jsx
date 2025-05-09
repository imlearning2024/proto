
import React, { useState } from "react";

const NGOSignup = () => {
  const [formData, setFormData] = useState({
    darpanId: "",
    email: "",
    password: "",
    orgName: "",
    areaOfOperation: "",
    mission: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Add signup logic here
    console.log("Registering NGO:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">NGO Registration</h2>
        <form onSubmit={handleSignup}>
          {[
            { label: "Darpan ID", name: "darpanId", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Organisation Name", name: "orgName", type: "text" },
            { label: "Area of Operation", name: "areaOfOperation", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name} className="mb-4">
              <label className="block text-sm font-semibold mb-1">{label}</label>
              <input
                type={type}
                name={name}
                required
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
          ))}

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Mission</label>
            <textarea
              name="mission"
              required
              value={formData.mission}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default NGOSignup;
