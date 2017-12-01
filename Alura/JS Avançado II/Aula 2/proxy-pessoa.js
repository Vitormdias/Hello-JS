let pessoa = new Proxy(new Pessoa('Barney'), {

  get(target, prop, receiver) {
    if (prop == 'grita' && typeof (target[prop]) == typeof (Function)) {
      //Essa função retornada irá substituir o método 'grita' no proxy 
      //Ou seja, estamos usando o handler do proxy para modificar o próprio proxy
      return function () {
        console.log(`Interceptei o método: ${prop}, por isso estou exbindo essa mensagem!`)
        // Quando usarmos Reflect.apply, Reflect.get e Reflect.set precisamos 
        // retornar o resultado da operação com return
        // arguments é uma variável implícita que dá acesso à todos os parâmetros 
        // recebidos pelo método/função
        return Reflect.apply(target[prop], target, arguments)  
        // retorna o valor resultante da chamada da função
      }
    }
    // só executa se não for função
    return Reflect.get(target, prop, receiver)
  }
})