// importing SHA function
const SHA256 = require('crypto-js/sha256');
// add elliptic library to generate public and private key, method to sign and method to verify signature
const EC = require('elliptic').ec;
// make an instance of elliptic and pass the elliptic curve. we passed secp2561 which is the basis algorithm to make BTC wallets
const ec = new EC('secp256k1');

// not using this
const debug = require('debug')('theCoin:blockchain');


// create a class called transaction
// START TRANSACTION STEP #2 (constructor takes arguements) && MINING STEP #6 (set the pending transactions with )
class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = Date.now();
    }

    // creates a hash of the transaction that we use to sign the transaction with our private key further down
    calculateHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount, this.timestamp).toString();
    }

    // receives a signing key, when it's called on the main page, with your public and private keys. So we have to give it the key pair. This is given as the ec.genKeyPair() object from keygenerator.js
    // TRANSACTION STEP #4 (if private key matches the public key => create hash and store signature)
    // * this code may need to be on the client
    signTransaction(signingKey){
        // check if the public key equals the fromAddress, you can only spend coins from
        // your wallet, so the fromAddress of this transaction must match the public key that matches your private key
        if(signingKey.getPublic('hex') !== this.fromAddress){
            throw new Error('You cannot sign transactions for other wallets')
        }

        // create hash of transaction
        const transactionHash = this.calculateHash();
        // create signature using .sign method from elliptic
        const signature = signingKey.sign(transactionHash, 'base64');
        // store signature in this transaction using .toDER method from elliptic. Export DER encoded signature in Array
        this.signature = signature.toDER('hex');
        // ? console log toDER when you can to see how to store it in transactions object and then verify transactions
    }

    // TRANSACTION STEP #7
    // ? modify and add this to the /mineBlock route
    isValid(){
        // if fromAddress is null then we will assume it is the mining reward transaction
        if(this.fromAddress === null) return true;

        // verify the hash of this block has been signed by this.signature
        if(!this.signature || this.signature.length === 0){
            throw new Error('No signature in this transaction')
        }

        // if there is a signature then we will extract the public key from it
        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        // then verify if the transaction has been signed by that key with elliptic .verify method
        // that returns a boolean after comparing the calculated hash to the signature hash
        // this recalculates the hash of the transaction and makes sure it's right
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}
// index tells us where block sits on chain
// timestamp tell us when block was created
// data is any type of data that you want to associate with block (Ex. the seller, the buyer, contracts?, amount, etc.)
// previoushash ensures integrity of blockchain
// hash is what calculates the hash of the current block with the other 4 properties of the block
// Modify Block class so that it supports multiple transactions, instead of "data"
// Took out the index because the order of blocks is determined by their position in the array, not by the index that we pass here
// START BLOCKCHAIN STEP #4 (new block) && MINING STEP #3 (every time you create a block after genesis)
class Block{
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    // SHA256 calculates the hash of the block using properties
    // stringify the data object
    // convert the output of the SHA256 function to a string. Otherwise you get an object that the library returns
    // START BLOCKCHAIN #5 (calculate hash)
    calculateHash(){
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    // MINING STEP #5
    // * make hash of block begin with a certain amount of zeros
    // * substring starts at 0 and goes to difficulty, (Example: first 5 characters, let difficulty = 4)
    // * while loop will keep running while first 5 digits of hash are not equal to 5 zeros
    // * subtring has index of 0 through difficulty, so compare it to a string made by an array of the same 
    // * length as the index length that must be joined by zeros
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
            // * use the nonce value counts how many times the hash was calculated to get the right number of 0's
            this.nonce++;
            this.hash = this.calculateHash();

            // * toggle below with cooments to see watch mining in Terminal
            console.log(`Nonce: ${this.nonce}, Hash: ${this.hash}`)
        }

        console.log("Hash of Block mined: " + this.hash);
    }

    // verifies all the transactions in the current block
    hasValidTransactions(){
        // iterate over all the transactions in the block and check if every transactioin is valid
        for(const tx of this.transactions){
            if(!tx.isValid()){
                console.log(`has valid is wrong`)
                return false;
            }
        }

        return true;
    }
}



// prove you've put a lot of computing power into making a block


// pending transactions holds the transactons that will be added to the block every 10 mins
// add mining rewards
// START BLOCKCHAIN #2 (blockchain constructor)
class Blockchain{
    // constructor initializes the blockchain
    constructor(){
        // initialize chain array with genesis block
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 10;
        this.pendingTransactions = [];
        // ! need to add mining reward to transaction
        this.miningReward = 100;
        // need to set difficulty to increase based on the supply decreasing
    }

    // first block is genesis block and needs to be added manually
    // returns a new block
    // parameters are any date you want, transactions start as empty array, previous hash is set to 0 because there are no previous blocks to use
    // START BLOCKCHAIN #3 (genesis block method)
    createGenesisBlock(){
        return new Block(Date.parse('2021-12-05'), [], "0");
        // this block goes to the chain in the constructor
    }

    // returns the last block in the chain
    getLastestBlock(){
        return this.chain[this.chain.length - 1];
    }


    // MINING STEP #2
    // receives miningRewardAddress to send reward to if you are successful when a miner calls this method. in reality miners pick transactions that they want to include
    // instantciates new block with the time, pending transactions on the blockchain and last block's hash
    minePendingTransactions(miningRewardAddress, transactions, previousHash){
        console.log(`Mining has begun with a difficulty setting of ${this.difficulty}`)
        let block = new Block(Date.now(), transactions, previousHash);
        // MINING STEP #4 (call the mineBlock method on the new block)
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined');
        // i don't think i need to do the below anymore
        // this.chain.push(block);

        // reset pending transactions array and add the mining reward transaction with the mining reward address so you get rewards on next block
        // ! need to make sure the next block has mining reward and adds this transaction to the database
        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];

        return block
    }

    // receives pending transaction and adds it to pending transaction array
    // TRANSACTION STEP #6
    addTransaction(transaction){

        // check that the fromAddress and toAddress is filled in
        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error('Transaction must include from and to address');
        }

        // verify if transaction is valid
        if(!transaction.isValid()){
            throw new Error('Cannot add invalid transaction to chain');
        }

        // when you pass these two test above, push the transaction to pending transactions in the constructor of the blockchain
        this.pendingTransactions.push(transaction);
    }

    // bitcoin doesn't move around. the transaction is stored on the block chain
    // loop over blockchain to add up balance
    getBalanceOfAddress(address){
        let balance = 0;

        // since each block contains multiple transaction, you need to loop 
        // over the transactions while you loop over the blocks
        // this checks each transaction to see if you were the fromAddress or the toAddress
        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    // verify the integrity
    // index 0 is genesis block, so we start at 1
    // select the blocks by their index, then check if their hashes are equal
    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // 
            if(!currentBlock.hasValidTransactions()){
                console.log(`transaction not valid`)
                return false;
            }

            // check if hash of current block, from when it was created, is not equal to the hash that should be calculated from the data
            // if the data of this has been changed then the hash won't recaculate to the same thing
            if(currentBlock.hash !== currentBlock.calculateHash()){
                console.log(`current hash not equal to calculated`)
                return false;
            }

            // check if the current block has a previous hash that is not equal to the hash of our previous block. If hash of block 1 was recalculated with new data, then it won't match the previous hatch of block 2
            if(currentBlock.previousHash !== previousBlock.hash){
                console.log(`current block previous hash: ${currentBlock.previousHash}, previous block hash: ${previousBlock.hash}`)
                return false;
            }
        }
        return true;
    }
}


module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;
module.exports.Block = Block;