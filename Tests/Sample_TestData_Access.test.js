// Tests/Sample_TestData_Access.test.js
const fetch = require('node-fetch');
const { baseUrl } = require('../Utils/base');
const userData = require('../Test_Data/user_js.json');

describe('users', () => {

  // Test to fetch users from page 2
  it('should fetch users from page 2', async () => {
    const response = await fetch(`${baseUrl}/users?page=2`);
    const data = await response.json();

    // Log the response data
    console.log('Response Data:', data);

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('page', 2);
    expect(data.data).toBeInstanceOf(Array);
  });

  // Test to create users using data from JSON file
  userData.forEach((user) => {
    it(`should create a new user: ${user.name}`, async () => {
      const url = `${baseUrl}/users`;
      const requestBody = {
        name: user.name,
        job: user.job,
      };
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      // Log the response data
      console.log(responseData);

      expect(response.status).toBe(201);
      expect(responseData).toHaveProperty('name', user.name);
      expect(responseData).toHaveProperty('job', user.job);
    });
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
