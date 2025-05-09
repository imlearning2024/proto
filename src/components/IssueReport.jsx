
import React, { useState } from "react";
import { Camera, MapPin, AlertTriangle, Send, Upload } from "lucide-react";

const IssueReport = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [issueType, setIssueType] = useState("");
  const [location, setLocation] = useState("");
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    
    // Create preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log({ image, description, issueType, location });
    setSubmitted(true);
    // Here you would usually send this data to your server
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 p-8 mt-10 rounded-lg shadow-lg">
        <div className="text-center py-16">
          <div className="mb-6 text-green-600">
            <AlertTriangle size={48} className="mx-auto" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Your environmental issue report has been submitted successfully. Together, we can make a difference.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Report Another Issue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 p-8 mt-10 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2 text-green-700">
          Be an Environmental Hero
        </h2>
        <p className="text-gray-600">Report issues to help protect our planet</p>
      </div>
      
      <div className="space-y-6">
        {/* Issue Type */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="flex items-center mb-2 text-gray-800 font-medium">
            <AlertTriangle size={20} className="mr-2 text-amber-500" />
            <span>Type of Issue</span>
          </label>
          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="">Select an issue type</option>
            <option value="water">Water Pollution</option>
            <option value="soil">Soil Pollution</option>
            <option value="air">Air Pollution</option>
            <option value="noise">Noise Pollution</option>
            <option value="deforestation">Deforestation</option>
            <option value="wildlife">Wildlife Endangerment</option>
            <option value="waste">Illegal Waste Dumping</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="flex items-center mb-2 text-gray-800 font-medium">
            <MapPin size={20} className="mr-2 text-red-500" />
            <span>Location</span>
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where is this issue located?"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Image Upload */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="flex items-center mb-2 text-gray-800 font-medium">
            <Camera size={20} className="mr-2 text-blue-500" />
            <span>Upload a Photo</span>
          </label>
          
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-500 transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            {preview ? (
              <div className="relative">
                <img 
                  src="/api/placeholder/400/320" 
                  alt="Preview" 
                  className="mx-auto max-h-64 rounded-md" 
                />
                <button 
                  type="button" 
                  onClick={() => {setPreview(null); setImage(null);}}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="text-center">
                <Upload size={36} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                  Drag and drop an image, or click to browse
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="flex items-center mb-2 text-gray-800 font-medium">
            <span>Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            placeholder="Describe the environmental issue in detail..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center mx-auto bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg"
          >
            <Send size={20} className="mr-2" />
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueReport;
