import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto'

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

// console.log(publicKey);
// console.log(privateKey);

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('Mensagem super secreta'));
console.log(dadosCriptografados.toString('hex'));

// ------ Transmissão ------

// Decifrar a mensagem

const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);
console.log(dadosDecifrados.toString('utf-8'));

