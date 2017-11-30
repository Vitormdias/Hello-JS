module.exports = (...numbers) => {
    let sum = numbers.reduce((s, value) => s + value, 0);

    let avg = sum / numbers.length;

    return avg;
}
