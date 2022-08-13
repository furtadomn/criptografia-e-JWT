import { createHash } from 'crypto'

class Usuario{
  constructor(nome, senha){
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
  }

  autentica(nome, senha){
    if (nome === this.nome && this.hash === this.criaHash(senha)){
      console.log('Usuário autenticado com sucesso!');
      return true;
    }

    // console.log('Usuário ou senha incorreta!');
    return false;
  }
}

const usuario = new Usuario('Marcella', '1337');
console.log(usuario);

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
  if (usuario.autentica('Marcella', senhaTeste.toString())){
    console.log(`A senha do usuário é: ${senhaTeste}`)
  }
}