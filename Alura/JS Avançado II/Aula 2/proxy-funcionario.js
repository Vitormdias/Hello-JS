let funcionario = {email: 'abc@abc.com'}

let funcionarioProxy = new Proxy(funcionario, {
  get(target, prop, receiver) {
    console.log('Armadilha aqui')
    // return target[prop]; // Valor retornado diretamente
    return Reflect.get(target, prop, receiver)//semelhante a um getter
  }
})

console.log(funcionarioProxy.email)