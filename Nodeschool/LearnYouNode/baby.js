entrada = process.argv
soma = 0;
for (var i = 2; i < entrada.length ; i++) {
   soma += Number(entrada[i]);
}
console.log(soma);
