// main.js is acting as the user interface right now with hard code

// import Blockchain and Transaction classes from blockchain
const {Blockchain, Transaction} = require('./blockchain');
// add elliptic library to generate public and private key, method to sign and method to verify signature
const EC = require('elliptic').ec;
// make an instance of elliptic and pass the elliptic curve. we passed secp2561 which is the basis algorithm to make BTC wallets which just hold your keys
const ec = new EC('secp256k1');

// initialize the key with private key, to sign transactions
const myKey = ec.keyFromPrivate('7119e13d5dc32c24d316f591edcb96c29db39bc22a4adbd37acf090ebe7f2462');
// extract wallet address with public key, for public address
const myWalletAddress = myKey.getPublic('hex');

// theCoin is a new Blockchain
// the blockchain is an array that contains all of our object blocks
// START BLOCKCHAIN STEP #1 (initiate blockchain)
let theCoin = new Blockchain();
// now you can use these methods => mine pending transactions, add transactions, create genesis block, get latest block, get balance of address, validate chain

// make a transaction that goes from mywallet to someone else public key, 10 units
// TRANSACTION STEP #1 (initiate transaction with "public" myWalletAddress)
const transactionOne = new Transaction(myWalletAddress, 'someone else public key goes here', 10);
const transactionTwo = new Transaction(myWalletAddress, 'someone else public key goes here', 20);
const transactionThree = new Transaction(myWalletAddress, 'someone else public key goes here', 30);
// TRANSACTION STEP #3 (sign transaction with the "private" myKey)
transactionOne.signTransaction(myKey);
transactionTwo.signTransaction(myKey);
transactionThree.signTransaction(myKey);
// then add the transaction to the blockchain
// TRANSACTION STEP #5 (add transaction to blockchain)
theCoin.addTransaction(transactionOne);


// theCoin.createTransaction(new Transaction('address1', 'address2', 100));
// theCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
// mine reward should go to myWalletAddress, which is my public key
// MINING STEP #1 (call the minePendingTransactions on theCoin block chain with your reward address)
theCoin.minePendingTransactions(myWalletAddress); // this method wants an address
theCoin.addTransaction(transactionTwo);
theCoin.minePendingTransactions(myWalletAddress); // this method wants an address
theCoin.addTransaction(transactionThree);
theCoin.minePendingTransactions(myWalletAddress); // this method wants an address

console.log('\n Balance of Kristian is', theCoin.getBalanceOfAddress(myWalletAddress));
console.log('is chain valid?', theCoin.isChainValid());
console.log(theCoin);



// theCoin.addBlock(new Block(1, '20/05/20', {amount: 4}));
// theCoin.addBlock(new Block(2, '21/05/20', {amount: 10}));

// console.log(`Is blockchain valid? ${theCoin.isChainValid()}`);

// console.log(`Before: ${JSON.stringify(theCoin.chain)}`);

// if(theCoin.chain[2].previousHash !== theCoin.chain[1].hash){
//     console.log('Before: not equal')
// } else console.log('Before: equal')

// // try and tamper with data below to check if the blocks are valid
// theCoin.chain[1].data = {amount: 100}; // change data
// theCoin.chain[1].hash = theCoin.chain[1].calculateHash(); // recalculate hash based on changed data
// console.log(`After: ${JSON.stringify(theCoin.chain)}`);

// console.log(`Is blockchain valid? ${theCoin.isChainValid()}`);

// if(theCoin.chain[2].previousHash !== theCoin.chain[1].hash){
//     console.log('After: not equal')
// } else console.log('After: equal')

//console.log(JSON.stringify(theCoin, null, 4));


// console.log(`Mining Block 1: `);
// theCoin.addBlock(new Block(1, "20/07/2017", {amount: 4}));

// console.log(`Mining Block 2: `);
// theCoin.addBlock(new Block(2, "20/07/2017", {amount: 8}));

// call rewards "nothingness"? Ultra Coin fractions are "Nothingness", or anticoin?. Should fractions delete (evaporate) on transactions and return to Ultra Coin to be remined? Check the "weight" of the UltraCoin and nothingness to validate transaction?

