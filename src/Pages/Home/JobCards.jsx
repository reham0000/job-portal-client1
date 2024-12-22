import React from "react";

const JobCards = () => {
  const jobs = [
    { name: "Management", icon: "📊" },
    { name: "Marketing & Sale", icon: "📈" },
    { name: "Finance", icon: "💰" },
    { name: "Human Resource", icon: "👥" },
    { name: "Retail & Products", icon: "🛒" },
    { name: "Content Writer", icon: "✍️" },
  ];

  return (
    <div className="w-full py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Jobs of the day</h2>
        <p className="text-gray-500 mt-2">
          Search and connect with the right candidates faster.
        </p>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 
                p-4 flex items-center justify-center cursor-pointer group"
          >
            {/* Job Content */}
            <div className="text-center">
              <div
                className="text-4xl mb-2 text-blue-500 group-hover:scale-110 
                    transition-transform duration-200"
              >
                {job.icon}
              </div>
              <span className="text-gray-700 font-semibold group-hover:text-blue-500">
                {job.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCards;
