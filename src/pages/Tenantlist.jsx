import React, { useEffect, useState } from "react";
import "./tenantlist.css";
import Layout from "../components/layout";

function MainContent() {
  const [tenantList, setTenantList] = useState([]);

  useEffect(() => {
    // Retrieve tenant details from local storage
    const storedTenantDetails = localStorage.getItem("tenantDetails");
    if (storedTenantDetails) {
      const parsedTenantDetails = JSON.parse(storedTenantDetails);
      setTenantList(parsedTenantDetails);
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="main-content">
          <header></header>
          <div className="tenantlist">
            {tenantList.length > 0 ? (
              <div className="table-container">
                <table className="tenantlist-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Domain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenantList.map((tenant, index) => (
                      <tr key={index}>
                        <td>{tenant.name}</td>
                        <td>{tenant.email}</td>
                        <td>{tenant.domain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No tenants found.</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MainContent;
