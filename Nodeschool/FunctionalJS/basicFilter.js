function shortMessages (array) {
    return array.filter((obj) => {
        return obj.message.length <= 50;
    }).map((obj) => {
        return obj.message;
    });
}

module.exports = shortMessages;
