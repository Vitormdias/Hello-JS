let funcionario = { email: 'abc@abc.com' }
let funcionarioProxy = new Proxy(funcionario, {

  set(target, prop, value, receiver) {
    console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`)
    return Reflect.set(target, prop, value, receiver)
    //quando usamos set a função deve receber quatro parâmetros e não três
  }

  //outra alternativa
  // set(target, prop, value, receiver) {
  //       console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
  //       target[prop] = value;
  //   }
})
funcionarioProxy.email = 'aaa@aaa.com'