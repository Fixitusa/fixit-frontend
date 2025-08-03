import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
 >
          <img
            src="/logo.png"
            alt="FixIt Logo"
            style={{ height: '80px', marginRight: '1rem' }}
          />

      <header style={{backgroundColor: '#0080d6', color: '#fff', padding: '1rem'}}>FixIt USA</header>
      <main style={{padding: '1rem'}}>Welcome to FixIt SaaS!</main>
    </div>
  );
}
export default App;