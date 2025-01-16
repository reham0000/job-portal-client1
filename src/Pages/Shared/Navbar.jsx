import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/job-portal.png";
import "./navbar.css";
import UseAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  // console.log(user);
  

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out. stay here. don't leave me alone");
      });
  };

  const links = (
    <>
      <div className="flex justify-center items-center gap-5 text-lg font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/myApplications">My Applications</NavLink>
        <NavLink to="/addJob">Add a job</NavLink>
        <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h3 className="text-3xl font-bold">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* <div>
        {user && user.photoURL ? (
            <img src={user.photoURL}  />
        ) : (
            <p>No Photo Available</p>
        )}
    </div> */}
      
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/register" className="mr-5 font-semibold">Register</Link>
            <Link to="/signin" className="btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
