import React from "react";
import Layout from "../components/layout";
import {  useNavigate, Navigate } from 'react-router-dom';

function Logout(){
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem("token");
        navigate('/login');
      };
    return(
       <>
       <Layout>
       <div className="logout">
            <h1>
                Good Day!
            </h1>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
       </Layout>
       </>
    );
}

export default Logout