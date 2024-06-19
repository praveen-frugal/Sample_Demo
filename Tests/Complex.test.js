const fetch = require('node-fetch');
const { addAttach } = require('jest-html-reporters/helper');
const { baseUrl } = require('../Utils/base');

describe('users', () => {
  

  it('should fetch users from page 2', async () => {
    const url = `${baseUrl}/users?page=2`;
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    // Log the response data
    console.log('Response Data:', data);

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('page', 2);
    expect(data.data).toBeInstanceOf(Array);

    
  });

  it('should create a new user', async () => {
    const url = `${baseUrl}/users`;
    const newUser = {
      name: 'morpheus',
      job: 'leader',
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    // Log the response data
    console.log(data);

    expect(response.status).toBe(201);
    expect(data).toHaveProperty('name', newUser.name);
    expect(data).toHaveProperty('job', newUser.job);

   
  });

  it('should update a user', async () => {
    const url = `${baseUrl}/users/2`;
    const updatedUser = {
      name: 'Jane Doe',
      job: 'Product Manager',
    };
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    // Log the response data
    console.log(data);

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('name', updatedUser.name);
    expect(data).toHaveProperty('job', updatedUser.job);

   
  });

  it('should delete a user', async () => {
    const url = `${baseUrl}/users/2`;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, requestOptions);

    // Log the response status
    console.log('Response Status:', response.status);

    expect(response.status).toBe(204);

  });
});
