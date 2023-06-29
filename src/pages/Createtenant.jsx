import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

function Createtenant() {
  const [tenantName, setTenantName] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [tenantDomain, setTenantDomain] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [dateEnded, setDateEnded] = useState('');
  const [allTenants, setAllTenants] = useState([]);

  useEffect(() => {
    // Retrieve tenant details from local storage on component mount
    const storedTenantDetails = localStorage.getItem('tenantDetails');
    if (storedTenantDetails) {
      const parsedTenantDetails = JSON.parse(storedTenantDetails);
      setAllTenants(parsedTenantDetails);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!tenantName || !tenantEmail || !tenantDomain || !dateAdded || !dateEnded) {
      alert('Please fill in all fields!');
      return;
    }
  
    const existingTenant = allTenants.find(
      (tenant) => tenant.email === tenantEmail || tenant.domain === tenantDomain
    );
  
    if (existingTenant) {
      alert('Email or domain already exists!');
      return;
    }
  
    const tenantDetails = {
      name: tenantName,
      email: tenantEmail,
      domain: tenantDomain,
      dateAdded: dateAdded,
      dateEnded: dateEnded,
    };
  
    const updatedTenants = [...allTenants, tenantDetails];
    setAllTenants(updatedTenants);
  
    localStorage.setItem('tenantDetails', JSON.stringify(updatedTenants));
  
    setTenantName('');
    setTenantEmail('');
    setTenantDomain('');
    setDateAdded('');
    setDateEnded('');
  
    alert('Tenant details saved!');
  };
  

  return (
    <>
      <Layout>
        <div
          className='createtenant'
          style={{ border: '1px solid black', padding: '1rem' }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ margin: '1rem' }}>
              <label htmlFor='tenantName'>Tenant Name:</label>
              <input
                type='text'
                id='tenantName'
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
              />
            </div>

            <div style={{ margin: '1rem' }}>
              <label htmlFor='tenantEmail'>Tenant Email:</label>
              <input
                type='email'
                id='tenantEmail'
                value={tenantEmail}
                onChange={(e) => setTenantEmail(e.target.value)}
              />
            </div>

            <div style={{ margin: '1rem' }}>
              <label htmlFor='tenantDomain'>Tenant Domain:</label>
              <input
                type='text'
                id='tenantDomain'
                value={tenantDomain}
                onChange={(e) => setTenantDomain(e.target.value)}
              />
            </div>

            <div style={{ margin: '1rem' }}>
              <label htmlFor='dateAdded'>Date Added:</label>
              <input
                type='date'
                id='dateAdded'
                value={dateAdded}
                onChange={(e) => setDateAdded(e.target.value)}
              />
            </div>

            <div style={{ margin: '1rem' }}>
              <label htmlFor='dateEnded'>Date Ended:</label>
              <input
                type='date'
                id='dateEnded'
                value={dateEnded}
                onChange={(e) => setDateEnded(e.target.value)}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem',
              }}
            >
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Createtenant;