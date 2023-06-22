import React from 'react';
import { Navigate } from 'react-router-dom';
const RouteGuard = ({ children }) => {
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />
        // console.log("not logined");
    }
    else{
       console.log("ok");
    }

    return <>{children}</>
}
export default RouteGuard;