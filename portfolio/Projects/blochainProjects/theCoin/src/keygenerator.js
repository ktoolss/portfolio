// * add elliptic library to generate public and private key, method to sign and method to verify signature
const EC = require('elliptic').ec;
// * make an instance of elliptic and pass the elliptic curve. we passed secp2561 which is the basis algorithm to make BTC wallets
const ec = new EC('secp256k1');

// * need the public and private keys to sign transactions and also verify our balance

// * generate a key pair. This is an object that contains both the public key and private key
const key = ec.genKeyPair();
console.log(`this is the key pair: ${key}`)

// * extract public key
const publicKey = key.getPublic('hex');

// * extract private key
const privateKey = key.getPrivate('hex');

// * show them on console
console.log();
console.log('Private key:', privateKey);

console.log();
console.log('Public key:', publicKey);