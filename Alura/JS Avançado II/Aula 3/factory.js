//O padrão de projeto Factory é um dos padrões mais 
//utilizados no desenvolvimento. 
//Ele é mais um da categoria dos patterns responsáveis 
//por criar objetos, como o Builder e o Prototype.

class NegociacaoFactory {

  static create(tipoNegociacao, dados) {
    if (tipoNegociacao == "opcao") {
      return new NegociacaoOpcao(dados.data, dados.quantidade, dados.valor)
    }
    return new NegociacaoAcao(dados.data, dados.quantidade, dados.valor)
  }
}

let n = NegociacaoFactory.create("acao", { 'data': new Date(), 'quantidade': 2, 'valor': 34.3 })