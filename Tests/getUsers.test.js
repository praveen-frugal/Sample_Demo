const fetch = require('node-fetch');
const { baseUrl } = require('../Utils/base');

describe('GET users -> CREATE Users', () => {
   
  it('should fetch users from page 2', async () => {
    const response = await fetch(`${baseUrl}/users?page=2`);
    const data = await response.json();

    // Log the response data
    console.log('Response Data:', data);

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('page', 2);
    expect(data.data).toBeInstanceOf(Array);
  });

    it('should create a new user', async () => {
    const newUser = {
      name: 'morpheus',
      job: 'leader',
    };

    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    console.log(data); // Print the response data

    expect(response.status).toBe(201);
    expect(data).toHaveProperty('name', newUser.name);
    expect(data).toHaveProperty('job', newUser.job);
  });
});
