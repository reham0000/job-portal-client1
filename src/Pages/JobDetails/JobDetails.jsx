import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();
  const validRequirements = Array.isArray(requirements) ? requirements : [];

  return (
    <div className=" min-h-screen p-4 py-10">
      <h1 className="text-5xl  font-semibold text-center mb-6 bg-blue-300 w-96 mx-auto p-4 rounded-2xl">
        Job Details
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Company Logo and Title */}
        <div className="flex items-center mb-6">
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600">
              {company} - {location}
            </p>
          </div>
        </div>

        {/* Job Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-700 font-medium">Job Type:</p>
            <p>{jobType}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Category:</p>
            <p>{category}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Salary Range:</p>
            <p>
              {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Application Deadline:</p>
            <p>{applicationDeadline}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Requirements
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            {validRequirements?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            {validRequirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <h2 className="text-lg font-semibold text-blue-800 mb-1">
            Contact Information
          </h2>
          <p>
            <span className="font-medium">HR Name:</span> {hr_name}
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a href={`mailto:${hr_email}`} className="text-blue-600">
              {hr_email}
            </a>
          </p>
        </div>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn w-36 lg:ml-80 md:ml-40 ml-40 text-lg font-bold mt-5 bg-blue-300">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
