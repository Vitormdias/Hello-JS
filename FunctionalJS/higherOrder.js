module.exports = (operation , num) => {
    times = new Array(num);
    times.forEach(() => {
        operation()
    });
};
