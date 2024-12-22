import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import { div } from "motion/react-client";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
