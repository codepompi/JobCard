import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPageOne = ({ onNext }) => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [remoteType, setRemoteType] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    onNext({ jobTitle, companyName, industry, location, remoteType });
    navigate("/form-two");
  };

  return (
    <div className=" flex justify-center border-4 border-gray-200 rounded-md shadow-md p-8 max-w-screen-sm ">
      <form className="mx-auto max-w-md" onSubmit={handleNext}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Create a Job </h2>
          <h2 className="text-2xl font-bold mb-4">Step 1</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block font-medium mb-1">
            Job Title
          </label>
          <input
            type="text"
            placeholder="ex.UX UI Designer"
            id="jobTitle"
            className="w-full px-4 py-2 border rounded-md"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block font-medium mb-1">
            Company Name
          </label>
          <input
            type="text"
            placeholder="ex.Google"
            id="companyName"
            className="w-full px-4 py-2 border rounded-md"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="industry" className="block font-medium mb-1">
            Industry
          </label>
          <input
            type="text"
            placeholder="ex.Information Technology"
            id="industry"
            className="w-full px-4 py-2 border rounded-md"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>
        <div className="flex justify-space-between gap-5">
          <div className="mb-4">
            <label htmlFor="location" className="block font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="ex.Chennai"
              id="location"
              className="w-full px-4 py-2 border rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remoteType" className="block font-medium mb-1">
              Remote Type
            </label>
            <input
              type="text"
              placeholder="ex.In-office"
              id="remoteType"
              className="w-full px-4 py-2 border rounded-md"
              value={remoteType}
              onChange={(e) => setRemoteType(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-20">
          <button
            type="submit"
            className="px-4 py-2  text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPageOne;
