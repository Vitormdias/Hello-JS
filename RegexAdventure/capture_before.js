module.exports = (str) => {
    const exp = /\bx=(\d+)\b/.exec(str);

    return exp ? exp[1] : null;
};
