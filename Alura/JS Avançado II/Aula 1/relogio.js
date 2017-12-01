class Relogio {

  constructor() {

    this._segundos = 0;

    setInterval(() => { console.log(++this._segundos); }, 1000);
    //utilizando arrow function ele irá pegar o this do contexto atual
    //caso usasse function normal não iria funcionar teria q salvar o this no constructor
  }

  // Opção utilizando function
  // constructor() {

  //       let self = this; // guardando o this que é a instância da classe `Relogio`
  //       this._segundos = 0;

  //       setInterval(function () {
  //           console.log(++self._segundos); // acessando a variável self, que é a instância de `Relogio` 
  //         }, 1000);

  //   }
}

var relogio = new Relogio();