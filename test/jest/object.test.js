/**
 * If you want to check the value of an object, use toEqual
 */
test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
