module.exports = function repeat (op, n) {
  if (n <= 0) return;

  op()

  if (n % 10 == 0) {
    setTimeout(() => {
      repeat(op, --n)
    })
  } else {
    repeat(op, --n)
  }
}
