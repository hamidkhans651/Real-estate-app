'use client'

import React, { useState, useEffect } from 'react';

const page = () => {
  const [property, setProperty] = useState({
    name: '',
    location: '',
    price: '',
    description: ''
  });
  const [properties, setProperties] = useState<any[]>([]); // State for properties list

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProperty((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/app/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });

      if (response.ok) {
        alert('Property added successfully!');

        // Refetch the properties
        await fetchProperties();
      } else {
        throw new Error('Failed to add property');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProperties = async () => {
    const response = await fetch('/api/properties');
    const data = await response.json();
    setProperties(data);
  };

  // Fetch properties when the page loads
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Add property form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={property.name} onChange={handleChange} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" value={property.location} onChange={handleChange} />
        </div>
        <div>
          <label>Price</label>
          <input type="text" name="price" value={property.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" value={property.description} onChange={handleChange} />
        </div>
        <button type="submit">Add Property</button>
      </form>

      {/* Property List */}
      <h2>Property List</h2>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
