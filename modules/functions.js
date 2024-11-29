function sum(num1, num2) {
  return num1 + num2;
} 

const name = "YuFei";


// ES6 syntax
// const functions = {
//   somma: sum,
//   name
// };
// export default functions;

// Common JS syntax
module.exports = {
  somma: sum,
  name
}