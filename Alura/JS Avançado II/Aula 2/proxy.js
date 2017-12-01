//Existe um famoso padrão de projeto chamado Proxy, que de forma resumida, é "um cara mentiroso"
//o Proxy é idêntico ao objeto
let pessoa = {
  nome: 'Flávio'
}

let pessoaProxy = new Proxy(pessoa, {
  get(target, prop, receiver) {
    //target é o objeto real, que é encapsulado pelo proxy.
    //prop é a propriedade que está sendo lida.
    //receiver é uma referência ao próprio proxy.
  }
});