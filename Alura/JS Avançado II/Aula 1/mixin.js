//Com mixin podemos "pegar emprestado" o metodo de outra
//classe sem termos uma instancia.
//Usar o metodo voa de aviao com o contexto de passarinho
class Aviao {

  constructor(nome) {
    this._nome = nome;
  }

  voa() {
    alert(`${this._nome} está voando`);
  }

  ligaMotor() {
    console.log('liga o motor');
  }

  fechaPortas() {
    console.log('Portas sendo fechadas');
  }
}

class Passarinho {

  constructor(nome) {
    this._nome = nome;
  }

  voa() {
    // executa o método `voa` de `Avião` usando como contexto a instância de `Passarinho`
    Reflect.apply(Aviao.prototype.voa, this, []);
  }

  // No ES5
  // voar() {
  //     Aviao.prototype.voa.apply(this, []);
  // }
}
