import React from "react";

const JobCard = ({ job }) => {
  const {
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    minExperience,
    maxExperience,
    minSalary,
    maxSalary,
    totalEmployees,
  } = job;

  return (
    <div className="border-4 border-gray-200 rounded-md shadow-md p-8 max-w-6xl  ">
      <h3 className="text-xl font-bold mb-2">{jobTitle}</h3>
      <p className="text-gray-500 mb-2">
        {companyName} - {industry}
      </p>
      <p className="text-gray-500 mb-2">
        {location} -( {remoteType})
      </p>
      <p className="text-gray-500 mb-2">
        Experience: ({minExperience} - {maxExperience}) years
      </p>
      <p className="text-gray-500 mb-2">
        INR(<span>&#8377;</span>) {minSalary} - {maxSalary} / Month
      </p>
      <p className="text-gray-500">{totalEmployees} employees </p>

      <div className="flex justify-start mt-20 gap-5">
        <button
          type="submit"
          className="px-4 py-2  text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
        >
          Apply Now
        </button>
        <button className="border border-blue-500bg-white-500 border-blue-500  text-blue-500  py-2 px-4 rounded">
          External Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
