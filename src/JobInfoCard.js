import React from "react";

const JobInfoCard = ({ job, additionalInfo }) => {
  const { jobTitle, companyName, industry, location, remoteType } = job;
  const {
    minExperience,
    maxExperience,
    minSalary,
    maxSalary,
    totalEmployees,
    applyType,
  } = additionalInfo;

  return (
    <div className="p-4 mb-4 bg-white border rounded-md shadow">
      <h2 className="text-xl font-bold">{jobTitle}</h2>
      <p className="text-gray-600">{companyName}</p>
      <p className="text-gray-600">{industry}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-600">{remoteType}</p>
      <h3 className="mt-4 text-lg font-bold">Additional Information</h3>
      <p className="text-gray-600">Minimum Experience: {minExperience}</p>
      <p className="text-gray-600">Maximum Experience: {maxExperience}</p>
      <p className="text-gray-600">Minimum Salary: {minSalary}</p>
      <p className="text-gray-600">Maximum Salary: {maxSalary}</p>
      <p className="text-gray-600">Total Employees: {totalEmployees}</p>
      <p className="text-gray-600">Apply Type: {applyType}</p>
    </div>
  );
};

export default JobInfoCard;
