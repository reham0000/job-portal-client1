import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    _id,
  } = job;

  const validRequirements = Array.isArray(requirements) ? requirements : [];

  return (
    <div className="flex justify-center items-center  bg-gray-100 p-4">
      {/* Card Container */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
        {/* Top Header */}
        <div className="p-4 flex items-center gap-4 border-b">
          <img
            src={company_logo} 
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{company}</h3>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tag */}
          <div className="flex gap-2 flex-wrap ">
            {validRequirements.map((skill, index) => (
              <p
                key={index}
                className="border text-center cursor-pointer hover:text-blue-300 px-2 rounded-md"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t">
          <p className="text-blue-600 flex items-center font-semibold ">
            Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} -{" "}
            {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
