
import React, { useState } from "react";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle registration logic here
    console.log("User registered:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">User Registration</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Address", name: "address", type: "text" },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Age", name: "age", type: "number" },
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

export default UserRegister;
