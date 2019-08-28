const axios = require('axios');

jest.mock('axios');

async function Users() {
  return axios.get('https://www.google.com');
}

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users().then(response => expect(response.data).toEqual(users));
});
