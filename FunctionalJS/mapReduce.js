module.exports = (array,func ) => {
  return array.reduce((acc,val) => {
    acc.push(func.call(this,val));
    return acc;
  }, []);
}
