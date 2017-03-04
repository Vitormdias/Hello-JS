module.exports = (words) => {
    return words.reduce(function(acc, word) {
        acc[word] = ++acc[word] || 1;
        return acc;
    }, {})
};
