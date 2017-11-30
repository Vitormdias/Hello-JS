module.exports = (str) => {
    const exp = /x=(\d+)/.exec(str);

    return exp ? exp[1] : null;
};
