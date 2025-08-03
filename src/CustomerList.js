import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ onCustomerAdded }) => {
  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    ssnLast4: '',
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCustomer({
      ...customer,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData for file upload
    const formData = new FormData();
    Object.entries(customer).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // Replace URL with your backend API endpoint
    await axios.post('/api/customers', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    onCustomerAdded(); // Callback to refresh customer list
    setCustomer({ fullName: '', email: '', phone: '', address: '', ssnLast4: '', document: null });
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 20, borderRadius: 10 }}>
      <h2>Add Customer</h2>
      <input name="fullName" placeholder="Full Name" value={customer.fullName} onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" value={customer.email} onChange={handleChange} required /><br />
      <input name="phone" placeholder="Phone" value={customer.phone} onChange={handleChange} required /><br />
      <input name="address" placeholder="Address" value={customer.address} onChange={handleChange} required /><br />
      <input name="ssnLast4" placeholder="Last 4 of SSN" value={customer.ssnLast4} onChange={handleChange} required /><br />
      <input type="file" name="document" onChange={handleChange} /><br />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
