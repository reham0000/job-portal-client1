import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = UseAuth();
  const [jobs, setJobs] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job-application/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingDonation = [...jobs].filter((d) => d._id !== id);
              setJobs(remainingDonation);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl mt-10 font-semibold font-mono">My Applications: {jobs?.length}</h2>
      <div className="overflow-x-auto mb-10 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Company</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, id) => (
              <tr key={id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.job_title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.jobType}
                  </span>
                </td>
                <td>{job.company}</td>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
