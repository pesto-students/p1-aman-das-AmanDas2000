const mathOperations = require('./calculator');
 
 
describe("Calculator tests", () => {
 test('adding 3 + 4 should return 7', () => {
   let result = mathOperations.sum(3,4)
   expect(result).toBe(7);
 });
  
 test('adding 2 stings 3 and 4 should return 34', () => {
  let result = mathOperations.sum('3','4')
  expect(result).toBe('34');
 });
  
 test('adding 1 sting 3 and 1 number 4 should return 34 as string', () => {
  let result = mathOperations.sum(3,'4')
  expect(result).toBe('34');
 });
 
 test("subtracting 5 from 10 should return 5", () => {
   let result = mathOperations.diff(10,5)
   expect(result).toBe(5);
 });
 
 test("multiplying 4 and 8 should return 32", () => {
   let result = mathOperations.product(4,8)
   expect(result).toBe(32);
 });
})