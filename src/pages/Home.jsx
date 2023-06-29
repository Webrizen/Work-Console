import React, { useState } from 'react';
import Layout from '../components/layout';
import './tenantlist.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = () => {
    const storedTenantDetails = localStorage.getItem('tenantDetails');
    if (storedTenantDetails) {
      const parsedTenantDetails = JSON.parse(storedTenantDetails);
      const filteredResults = parsedTenantDetails.filter(
        (tenant) =>
          tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tenant.domain.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowNoResults(filteredResults.length === 0);
    }
  };

  return (
    <>
      <Layout>
        <div className="dashboard">
          <div className="dashboard__header">
            <div className="dashboard__logo">Dashboard</div>
            <div className="dashboard__search">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
          {searchResults.length > 0 && (
            <div className="dashboard__results">
              <h2>Search Results</h2>
              <br />
              <table className="tenantlist-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Domain</th>
                    <th>Date Added</th>
                    <th>Date Ended</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((tenant) => (
                    <tr key={tenant.email}>
                      <td>{tenant.name}</td>
                      <td>{tenant.email}</td>
                      <td>{tenant.domain}</td>
                      <td>{tenant.dateAdded}</td>
                      <td>{tenant.dateEnded}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {showNoResults && (
            <div className="dashboard__no-results">
              <h2>No search results found for this term</h2>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
