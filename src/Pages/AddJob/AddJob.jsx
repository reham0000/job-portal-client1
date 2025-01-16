import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    // console.log(newJob);
    newJob.salaryRange = {
      min: parseInt(min),
      max: parseInt(max),
      currency,
    };
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-mono font-semibold mt-10">Add Job</h1>
      <div className="max-w-4xl mb-10 mx-auto p-6 bg-white rounded-md shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Job Form</h2>
        <form onSubmit={handleAddJob} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              name="title"
              //   value={title}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              //   value={location}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Application Deadline */}
          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              type="date"
              name="Deadline"
              //   value={location}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              name="jobType"
              //   value={jobType}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              //   value={category}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Min Salary
              </label>
              <input
                type="number"
                name="min"
                // value={salaryRange.min}
                // onChange={(e) => handleNestedChange(e, "salaryRange")}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Max Salary
              </label>
              <input
                type="number"
                name="max"
                // value={salaryRange.max}
                // onChange={(e) => handleNestedChange(e, "salaryRange")}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select
                name="currency"
                //   value={category}
                //   onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              //   value={status}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* HR Name */}
          <div>
            <label className="block text-sm font-medium mb-1">HR Name</label>
            <input
              type="text"
              name="hr_name"
              defaultValue={user.displayName}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* HR Email */}
          <div>
            <label className="block text-sm font-medium mb-1">HR Email</label>
            <input
            readOnly
              type="email"
              name="hr_email"
              defaultValue={user.email}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              //   value={description}
              //   onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>
          {/* Company */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="Company"
              //   value={location}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* responsibilities */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Job Responsibilities
            </label>
            <textarea
              name="responsibilities"
              placeholder="Write each responsibilities in a new line"
              //   value={description}
              //   onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>
          {/* requirements */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Job Requirements
            </label>
            <select
              name="requirements"
              //   value={jobType}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </div>
          {/* Company Logo */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company logo
            </label>
            <input
              type="url"
              name="company-logo"
              //   value={hr_email}
              //   onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
