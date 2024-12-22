import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); 

    if(loading) {
        return  <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Loader Container */}
        <div className="relative">
          {/* Animated Ring */}
          <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
          {/* Loader Text */}
          <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
            <span className="text-blue-500 font-bold">Loading...</span>
          </div>
        </div>
      </div>
    }

    if(user) {
        return children
    }

  return <Navigate to = '/signin' state={location?.pathname}> </Navigate>;
};

export default PrivetRoute;
