import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPageTwo = ({ onDone }) => {
  const navigate = useNavigate();
  const [minExperience, setMinExperience] = useState("");
  const [maxExperience, setMaxExperience] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [totalEmployees, setTotalEmployees] = useState("");
  const [applyType, setApplyType] = useState("");

  const handleDone = (e) => {
    e.preventDefault();
    onDone({
      minExperience,
      maxExperience,
      minSalary,
      maxSalary,
      totalEmployees,
      applyType,
    });
    navigate("/job-cards");
  };

  return (
    <div className=" flex justify-center border-4 border-gray-200 rounded-md shadow-md p-8 max-w-screen-sm ">
      <form className="mx-auto max-w-md" onSubmit={handleDone}>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Create a Job </h2>
          <h2 className="text-2xl font-bold mb-4">Step 2</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="minSalary" className="block font-medium mb-1">
            Experience
          </label>
        </div>
        <div className="flex justify-space-between gap-5">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Minimum"
              id="minExperience"
              className="w-full px-4 py-2 border rounded-md"
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Maximum"
              id="maxExperience"
              className="w-full px-4 py-2 border rounded-md"
              value={maxExperience}
              onChange={(e) => setMaxExperience(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="minSalary" className="block font-medium mb-1">
            Salary
          </label>
        </div>
        <div className="flex justify-space-between gap-5">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Minimum"
              id="minSalary"
              className="w-full px-4 py-2 border rounded-md"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Maximum"
              id="maxSalary"
              className="w-full px-4 py-2 border rounded-md"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="totalEmployees" className="block font-medium mb-1">
            Total Employees
          </label>
          <input
            type="text"
            placeholder="ex.100"
            id="totalEmployees"
            className="w-full px-4 py-2 border rounded-md"
            value={totalEmployees}
            onChange={(e) => setTotalEmployees(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="applyType" className="block font-medium mb-1">
            Apply Type
          </label>
          <div className="flex items-center">
            <label htmlFor="applyTypeRemote" className="mr-4">
              <input
                type="radio"
                id="applyTypeRemote"
                value="remote"
                checked={applyType === "remote"}
                onChange={(e) => setApplyType(e.target.value)}
                className="mr-2"
              />
              Quick apply
            </label>
            <label htmlFor="applyTypeOffice">
              <input
                type="radio"
                id="applyTypeOffice"
                value="office"
                checked={applyType === "office"}
                onChange={(e) => setApplyType(e.target.value)}
                className="mr-2"
              />
              External apply
            </label>
          </div>
        </div>
        <div className="flex justify-end mt-20">
          <button
            type="submit"
            className="px-4 py-2  text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPageTwo;
