//console.log("Hello World");

//console.log(double(10));
//console.log(window);
//console.log(document);

//console.log(global);

//command line argument
//console.log(process.argv);

const double = (n) => n * 2;

//destructuring
const [, , n] = process.argv;

console.log(double(n));
