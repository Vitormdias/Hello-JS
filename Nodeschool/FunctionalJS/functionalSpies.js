module.exports = function Spy (target , method) {
  let func = target[method]; 
  let obj = {
    count: 0
  };
  
  target[method] = () => {
    obj.count++;
    return func.apply(this , arguments);
  };

  return obj;
}
