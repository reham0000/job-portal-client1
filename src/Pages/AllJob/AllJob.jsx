import React, { useState } from "react";
import UseJobs from "../../Hooks/UseJobs";
import HotJobCard from "../Home/HotJobCard";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [search, setSearch] = useState("");
  const { jobs, loading } = UseJobs(sort, search, minSalary, maxSalary);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>

      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 mb-5 rounded-md flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <BiSearch className="text-5xl"></BiSearch>
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input w-full max-w-2xl"
          placeholder="Search Jobs by Location"
        />
        <div className="space-y-3">
        <input
          onKeyUp={(e) => setMinSalary(e.target.value)}
          type="text"
          className="input w-full max-w-xs"
          placeholder="Min Salary"
        />
        <input
          onKeyUp={(e) => setMaxSalary(e.target.value)}
          type="text"
          className="input w-full max-w-xs"
          placeholder="Max Salary"
        />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJob;
