//assim se evita o uso da variavel funcionarioProxy
funcionario = new Proxy({ email: 'abc@abc.com' }, {

  get(target, prop, receiver) {
    console.log('Armadilha aqui!')
    return '**' + Reflect.get(target, prop, receiver) + '**'
  }

})
console.log(funcionario.email)