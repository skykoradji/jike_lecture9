const axios = require('axios');

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toMatch(/html/);
    done();
  }

  axios.get('https://www.google.com').then(response => {
    callback(response.data);
  });
});

test('the data is peanut butter', async () => {
  const response = await axios.get('https://www.google.com');
  expect(response.data).toMatch(/html/);
});
