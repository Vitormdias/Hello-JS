'use strict'

const p1 = Promise.resolve('Promise 1');

const p2 = Promise.reject(new Error ('Promise 2'));

p2.catch(console.log);
