import { createHash } from 'crypto'

function criaHash(senha){
  return createHash('sha256').update(senha).digest('hex');
}

class Usuario{
  constructor(nome, senha){
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha){
    if (nome === this.nome && this.hash === criaHash(senha)){
      console.log('Usuário autenticado com sucesso!');
      return true;
    }

    console.log('Usuário ou senha incorreta!');
    return false;
  }
}

const usuario = new Usuario('Marcella', 'minhasenha');
console.log(usuario);

// Caso de sucesso
usuario.autentica('Marcella', 'minhasenha');

// Casos de falha
usuario.autentica('Marcella', 'senhaincorreta');
usuario.autentica('Chris', 'minhasenha');

