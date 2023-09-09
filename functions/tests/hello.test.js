// import { helloWorld } from "src/tests";
const { helloWorld } = require('src/tests');


test('helloWorld', async () => {
  expect.assertions(1);
  const result = await helloWorld();
  expect(result.data).toEqual({ "message": "Hello from Firebase!" });
});


function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});