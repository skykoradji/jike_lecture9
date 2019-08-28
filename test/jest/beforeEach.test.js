const axios = require('axios');

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  let response = null;
  beforeEach(async () => {
    response = await axios.get('https://www.google.com');
  });

  test('Vienna <3 sausage', () => {
    expect(response.data).toMatch(/html/);
  });
});
