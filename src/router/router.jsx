import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route Not Found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'jobs/:id',
          element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
          loader: ({params}) => fetch (`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: 'jobApply/:id',
          element: <PrivetRoute><JobApply></JobApply></PrivetRoute>
        },
        {
          path: 'myApplications',
          element: <PrivetRoute><MyApplications></MyApplications></PrivetRoute>
        },
        {
          path: 'addJob',
          element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
        },
        {
          path: 'myPostedJobs',
          element: <PrivetRoute><MyPostedJobs></MyPostedJobs></PrivetRoute>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'signin',
            element: <SignIn></SignIn>
        }
      ]
    },
  ]);

export default router;