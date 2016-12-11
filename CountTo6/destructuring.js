let userArray = process.argv.slice(2);
let res = {};

[,res.username , res.email] = userArray;

console.log(res);
