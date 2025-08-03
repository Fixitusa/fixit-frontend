import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleCustomerAdded = () => setRefresh(!refresh);

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif' }}>
      {/* Header with Logo and Brand */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <img
          src="/logo.png"
          alt="FixIt Logo"
          style={{ height: '80px', marginRight: '1rem' }}
        />
        <header style={{ backgroundColor: '#0080d6', color: '#fff', padding: '1rem', borderRadius: 8, width: '100%' }}>
          <h1 style={{ margin: 0 }}>FixIt USA – Customer Management</h1>
        </header>
      </div>
      <main style={{ padding: '1rem', background: '#f7f7f7', borderRadius: 8 }}>
        <CustomerForm onCustomerAdded={handleCustomerAdded} />
        <div style={{ marginTop: 32 }}>
          <CustomerList key={refresh} />
        </div>
      </main>
    </div>
  );
}

export default App;
