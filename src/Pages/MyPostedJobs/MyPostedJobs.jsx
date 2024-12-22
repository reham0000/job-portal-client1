import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState();
  const { user } = UseAuth();
//   console.log(jobs);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div>
      <h1 className="text-3xl font-semibold font-mono mt-10 mb-10">
        My Posted Jobs: {jobs?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.Deadline}</td>
                <td>{job.applicationCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
