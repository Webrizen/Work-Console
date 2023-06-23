import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import './tenantlist.css';

function Deletetenant() {
  const [tenantList, setTenantList] = useState([]);

  useEffect(() => {
    // Retrieve tenant details from local storage
    const storedTenantDetails = localStorage.getItem("tenantDetails");
    if (storedTenantDetails) {
      const parsedTenantDetails = JSON.parse(storedTenantDetails);
      setTenantList(parsedTenantDetails);
    }
  }, []);

  const handleDelete = (index) => {
  if (window.confirm("Are you sure you want to delete this tenant?")) {
    const updatedTenantList = [...tenantList];
    updatedTenantList.splice(index, 1);
    setTenantList(updatedTenantList);

    // Update the tenant details in local storage
    localStorage.setItem("tenantDetails", JSON.stringify(updatedTenantList));

    alert("Tenant deleted!");
  }
};


  return (
    <>
      <Layout>
        <div className="deletetenant">
          {tenantList.length > 0 ? (
            <div className="table-container">
              <table className="tenantlist-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Domain</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tenantList.map((tenant, index) => (
                    <tr key={index}>
                      <td>{tenant.name}</td>
                      <td>{tenant.email}</td>
                      <td>{tenant.domain}</td>
                      <td>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No tenants found.</p>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Deletetenant;
