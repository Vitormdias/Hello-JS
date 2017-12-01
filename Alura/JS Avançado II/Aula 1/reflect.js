let objeto1 = {
  nome: 'Bob'
};

let objeto2 = {
  nome: 'Leo'
}

function exibeNome() {
  alert(this.nome);
}
//vai dar erro pq o this não possui nome

Reflect.apply(exibeNome, objeto1, []); // exibe 'Bob'

Reflect.apply(exibeNome, objeto1, []); // exibe 'Bob'

//Reflect.apply -> function 
//-> params (funcaoQueSeraInvocada, objQueSeraThis, listaComParametrosPrimeiraFuncao)

function exibeNome2(prefixo, sufixo) {
  alert(prefixo + this.nome + sufixo);
}

Reflect.apply(exibeNome, objeto1, ['(', ')']); // exibe '(Bob)'