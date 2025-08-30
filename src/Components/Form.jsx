import React, { useState } from "react";

const StartupForm = () => {
  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    mobile: "",
    startupName: "",
    fundingask: "",
    pitchdeck: null, // will hold the File object
    traction: "",
    founderType: "",
    city: "",
    industry: "",
    about: "",
    fundingStage: "",
    raisedFundsBefore: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] }); // store File object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "https://alaianss.app.n8n.cloud/webhook/startup-form",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      let result;
      try {
        result = await response.json();
      } catch {
        result = await response.text();
      }

      setMessage("✅ Form submitted successfully!");
      console.log("API Response:", result);

      setFormData({
        founderName: "",
        email: "",
        mobile: "",
        startupName: "",
        fundingask: "",
        pitchdeck: null,
        traction: "",
        founderType: "",
        city: "",
        industry: "",
        about: "",
        fundingStage: "",
        raisedFundsBefore: "",
      });

      document.getElementById("pitchdeck").value = "";
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
console.log(formData);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Startup Onboarding Form</h2>
      {message && (
        <p
          className={`mb-4 font-medium ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* Founder Name */}
        <div className="flex flex-col">
          <label htmlFor="founderName" className="font-medium mb-1">
            Enter Founder Name
          </label>
          <input
            type="text"
            name="founderName"
            id="founderName"
            value={formData.founderName}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-1">
            Enter Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* Mobile */}
        <div className="flex flex-col">
          <label htmlFor="mobile" className="font-medium mb-1">
            Enter Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* Startup Name */}
        <div className="flex flex-col">
          <label htmlFor="startupName" className="font-medium mb-1">
            Enter Startup Name
          </label>
          <input
            type="text"
            name="startupName"
            id="startupName"
            value={formData.startupName}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* Startup Stage */}
        <div className="flex flex-col">
          <label htmlFor="fundingask" className="font-medium mb-1">
             Funding Ask
          </label>
          <input
            type="text"
            name="fundingask"
            id="fundingask"
            value={formData.fundingask}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Pitchdeck */}
        <div className="flex flex-col">
          <label htmlFor="pitchdeck" className="font-medium mb-1">
            Upload Pitchdeck (PDF, PPT)
          </label>
          <input
            type="file"
            name="pitchdeck"
            id="pitchdeck"
            accept=".pdf,.ppt,.pptx"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* Traction */}
        <div className="flex flex-col">
          <label htmlFor="traction" className="font-medium mb-1">
            Traction (₹ Crores)
          </label>
          <select
            name="traction"
            id="traction"
            value={formData.traction}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Traction</option>
            <option value="0-1 cr">0-1 cr</option>
            <option value="1-5 cr">1-5 cr</option>
            <option value="5+ cr">5+ cr</option>
          </select>
        </div>

        {/* Founder Type */}
        <div className="flex flex-col">
          <label htmlFor="founderType" className="font-medium mb-1">
            Founder Type
          </label>
          <select
            name="founderType"
            id="founderType"
            value={formData.founderType}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select one</option>
            <option value="firstTime">First-time founder</option>
            <option value="serialEntrepreneur">Serial Entrepreneur</option>
          </select>
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label htmlFor="city" className="font-medium mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Industry */}
        <div className="flex flex-col">
          <label htmlFor="industry" className="font-medium mb-1">
            Select Industry
          </label>
          <select
            name="industry"
            id="industry"
            value={formData.industry}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Startup Industry</option>
            <option value="Others">Others</option>
            <option value="Deep Tech">Deep Tech</option>
            <option value="Consumer Tech">Consumer Tech</option>
            <option value="Food Tech">Food Tech</option>
            <option value="Health Tech">Health Tech</option>
            <option value="HR Tech">HR Tech</option>
            <option value="Clean Tech">Clean Tech</option>
            <option value="Fin Tech">Fin Tech</option>
            <option value="Ed Tech">Ed Tech</option>
            <option value="Agri Tech">Agri Tech</option>
            <option value="Consumer">Consumer</option>
            <option value="Ad Tech">Ad Tech</option>
            <option value="Enterprise Tech">Enterprise Tech</option>
          </select>
        </div>

        {/* About */}
        <div className="flex flex-col">
          <label htmlFor="about" className="font-medium mb-1">
            About the Company
          </label>
          <textarea
            name="about"
            id="about"
            value={formData.about}
            onChange={handleChange}
            className="border p-2 rounded"
            rows="3"
          />
        </div>

        {/* Funding Stage */}
        <div className="flex flex-col">
          <label htmlFor="fundingStage" className="font-medium mb-1">
            Select Current Funding Stage
          </label>
          <select
            name="fundingStage"
            id="fundingStage"
            value={formData.fundingStage}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Funding Stage</option>
            <option value="Seed">Seed</option>
            <option value="Pre - Seed">Pre - Seed</option>
            <option value="Pre - Series A">Pre - Series A</option>
            <option value="Series A">Series A</option>
            <option value="Series A Bridge">Series A Bridge</option>
          </select>
        </div>

        {/* Raised Funds Before */}
        <div className="flex flex-col">
          <label htmlFor="raisedFundsBefore" className="font-medium mb-1">
            Raised Funds Before?
          </label>
          <select
            name="raisedFundsBefore"
            id="raisedFundsBefore"
            value={formData.raisedFundsBefore}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#5B60CA] text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default StartupForm;
