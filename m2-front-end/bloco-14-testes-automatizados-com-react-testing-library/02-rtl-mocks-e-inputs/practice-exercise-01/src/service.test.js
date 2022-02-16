const service = require('./service');

test('Se a função returnRandomNumber é chamada', () => {
  expect(returnRandomNumber).toBeCalled;
});
