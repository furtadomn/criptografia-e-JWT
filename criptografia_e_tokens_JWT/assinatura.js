import { generateKeyPairSync, createSign, createVerify } from 'crypto'

const objeto = {
  modulusLength: 2048,

  publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
  },
  privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
  }
};

const { privateKey, publicKey } = generateKeyPairSync('rsa', objeto);

let dados = 'Essa string vai ser assinada!';

// Assinatura

const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');
console.log(assinatura);

// Ao alterar o valor inicial de 'dados', a verificação se tornará falsa. Descomente a linha abaixo para testar.

// dados += 'Arquivo alterado';

// Envio desse documento ----- Documento, assinatura e chave pública

const verificador = createVerify('rsa-sha256');
verificador.update(dados);

const foiVerificado = verificador.verify(publicKey, assinatura, 'hex');
console.log(foiVerificado);
