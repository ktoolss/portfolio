const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const keys = require('../config/keys');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');


// * import Blockchain and Transaction classes from blockchain
const {Blockchain, Transaction, Block} = require('../src/blockchain');
// * add elliptic library to generate public and private key, method to sign and method to verify signature
const EC = require('elliptic').ec;
// * make an instance of elliptic and pass the elliptic curve. we passed secp2561 which is the basis algorithm to make BTC wallets which just hold your keys
const ec = new EC('secp256k1');

// ? initialize the key with private key, to sign transactions
const myKey = ec.keyFromPrivate('7119e13d5dc32c24d316f591edcb96c29db39bc22a4adbd37acf090ebe7f2462');
// ? extract wallet address with public key, for public address
const myWalletAddress = myKey.getPublic('hex');

// ! comments below are vestigial code
// const transactionOne = new Transaction(myWalletAddress, 'someone else public key goes here', 10);
// transactionOne.signTransaction(myKey);
// theCoin.addTransaction(transactionOne);
// console.log('\n Starting the miner...');
// theCoin.minePendingTransactions(myWalletAddress); // this method wants an address
// console.log('\n Balance of Kristian is', theCoin.getBalanceOfAddress(myWalletAddress));
// console.log('is chain valid?', theCoin.isChainValid());


// * use server to search the client folder to find an html file
app.use(express.static('../client'));

// * connect to theCoin database
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log(`connected to ${keys.dbName}`))
.catch(error => console.log(`Cannot connect to DB, ${error}`))


// * create schemas for your databases
let blockSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        required: [true, "Block must have timestamp."]
    },
    transactions: {
        type: Array,
        required: [true, "Block must have transactions."]
    },
    previousHash: {
        type: String,
        required: [true, "Block must have previous hash."]
    },
    hash: {
        type: String,
        required: [true, "Block must have hash"]
    },
    nonce: {
        type: Number,
        required: [true, "Block must have nonce"]
    }
})

// ? transactions need hashes
let transactionSchema = mongoose.Schema({
    fromAddress: {
        type: String,
        required: [true, "Transaction must have fromAddress."]
    },
    toAddress: {
        type: String,
        required: [true, "Transaction must have toAddress."]
    },
    amount: {
        type: Number,
        required: [true, "Transaction must have amount."]
    },
    timestamp: {
        type: Date,
        required: [true, "Transaction must have timestamp."]
    },
})

// ? create login page and user schema and model with userName, wallet address and passWord in schema

let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Must have first name."]
    },
    lastName: {
        type: String,
        required: [true, "Must have last name."]
    },
    password: {
        type: String,
        required: [true, "Must have password"]
    },
    email: {
        type: String,
        required: [true, "Must have email"]
    },
    publicKey: {
        type: String,
        required: [true, "Must have public key"]
    },
    privateKey: {
        type: String,
        required: [true, "Must have private key"]
    }
})

// let deleteSchema = mongoose.Schema({
//     description: {
//         type: String,
//         required: [true, "Must have description!!!"]
//     },
//     isComplete: {
//         type: Boolean,
//         default: false
//     },
//     deleted: {
//         type: Date,
//         default: Date.now()
//     }
// })

// * the BlockModel stores the Block collection with the blockSchema
let BlockModel = mongoose.model('Blockchain', blockSchema);
let TransactionModel = mongoose.model('Transaction', transactionSchema);
let UserModel = mongoose.model('User', userSchema);

// let DeleteModel = mongoose.model('DeletedTodos', deleteSchema);


// ? EJS under construction
// app.get('/home', (req, res)=>{
//     console.log(req);
//     res.render('home', {data});
// });

// * this should create genesis block or send latest block when page loads on client
app.get('/blockchain', (req, res)=>{
    BlockModel.find({}, (error, blocks)=>{
        if(error){
            console.log(`you got an error in blockchain GET: ${error}`)
        } else if(blocks == ''){
            // * if blocks is an empty string, initialize blockchain to create and store genesis block
            let theCoin = new Blockchain(); 
            let genesis = theCoin.chain[0];

            // * initialize genesis block
            let genesisBlock = new BlockModel({
                timestamp: genesis.timestamp,
                transactions: genesis.transactions,
                previousHash: genesis.previousHash,
                hash: genesis.hash,
                nonce: genesis.nonce
            })
            
            // * save genesis block to blockchain database, and send json to client
            genesisBlock.save((error, result)=>{ // saves genesis block to database
                if(error){
                    console.log(`you got an error in genesis block save: ${error}`)
                } else {
                    console.log(`result is: ${result}`)
                    res.json(result) // sends genesis block to client
                }
            })
        } else{
            // console.log(`results from blockchain GET: ${results}`)
            // * sends the blocks to client
            res.json(blocks)
        }}
)})


// * mine the transactions for a new block
app.post('/mineBlock', (req, res)=>{
    let minerAddress = req.body.fromAddress
    // * find all the transactions in the database
    TransactionModel.find({}, (error, foundTransactions)=>{
        if(error){
            console.log(`you got an error in /mineBlock POST: ${error}`)
        } else if(foundTransactions){
            // ? need to verify all transactions here
            // * find all the blocks in the database
            BlockModel.find({}, (error, blocks)=>{
                if(error){
                    console.log(`you got an error in /mineBlock POST previous block: ${error}`)
                } else {
                    // ? use hasValidTransactions code here?
                    // * initialize last block to use its hash in mine pending transactions
                    const lastBlock = blocks[blocks.length - 1];
                    console.log(`this is lastBlock hash in previous block: ${lastBlock.hash}`)

                    // * initialize a newBlock by "proof of work" mining
                    let newBlock = new Blockchain().minePendingTransactions(req.body.fromAddress, foundTransactions, lastBlock.hash);
                    
                    // console.log(`are these 2 blocks?: ${newBlock}`)

                    // * create the new block in the databse
                    // ? change if statement to better looking function
                    if(newBlock){
                        BlockModel.create({
                            timestamp: newBlock.timestamp,
                            transactions: newBlock.transactions,
                            previousHash: newBlock.previousHash,
                            hash: newBlock.hash,
                            nonce: newBlock.nonce
                        })
                        .then(
                            // * delete all the transactions after you add them to block
                            TransactionModel.deleteMany({}, (error, deleteResults)=>{
                                if(error){
                                    console.log(`error: ${error}`)
                                } else{
                                    console.log(`Number of transactions delted from database: ${deleteResults.deletedCount} transaction(s)`)
                                    //res.json(newBlock)
                                }
                            })
                        )
                        .then(
                            // * initialize and save the mining reward transaction so it can be added to the next block's transactions
                            TransactionModel.find({}, (error, accessDB)=>{
                                if(error){
                                    console.log(`you got an error in mineBlock last transactionModel: ${error}`)
                                } else if(accessDB){
                                    // * initialize transaction to use in the TransactionModel, and minerAddress from top of route
                                    let minerReward = new Transaction(null, minerAddress, 100)

                                    // * store transaction as a model
                                    let minerTransaction = new TransactionModel({
                                        fromAddress: 'blockchainRewards',
                                        toAddress: minerReward.toAddress,
                                        amount: 100,
                                        timestamp: minerReward.timestamp
                                    })
                            
                                    // * save transaction model in database and send json to client
                                    minerTransaction.save((error, reward)=>{
                                        if(error){
                                            console.log(`you got an error in minerReward save: ${error}`)
                                        } else {
                                            console.log(`Miner reward transaction is: ${reward}`)
                                            res.json(reward)
                                        }
                                    })
                                }})
                        )
                    }
                }
            })
        }})
});


// * create transactions
app.post('/transaction', (req, res)=>{
    // ? Validate user's wallet address here
    // ? pull their data from user data base and compare their private key to their public and privat keys

    // * this transaction model is just accessing database to store transactions in with save. 
    // ? Maybe better query method to use?
    TransactionModel.find({}, (error, transactions)=>{
        if(error){
            console.log(`you got an error in Transaction POST: ${error}`)
        } else if(transactions){
            // * initialize new transaction with request body data from client
            const transaction = new Transaction(req.body.fromAddress, req.body.toAddress, req.body.amount);

            // * store transaction in model
            // ? need to enter user's public wallet addresses here
            let newTransaction = new TransactionModel({
                fromAddress: transaction.fromAddress,
                toAddress: transaction.toAddress,
                amount: transaction.amount,
                timestamp: transaction.timestamp
            })

            // ? sign transaction here by checking the private key here, or add that to transactoin schema?

            // * save transaction in transaction database, and send json to client 
            newTransaction.save((error, saved)=>{
                if(error){
                    console.log(`you got an error in Transaction save: ${error}`)
                } else {
                    console.log(`This transaction was saved: ${saved}`)
                    res.json(newTransaction.amount) 
                }
            })
        } else{
            console.log(`results from Transaction POST: ${results}`)
            res.json(results)
    }})
})



// * get your balance from your wallet
app.post('/wallet', (req, res)=>{
    console.log(`req body address: ${req.body.address}`)

    // * find all blocks in the database
    BlockModel.find({}, (error, blocks)=>{
        if(error){
            console.log(`you got an error in wallet GET: ${error}`)
        } else{
            console.log(`you got the blocks from /wallet: ${blocks[blocks.length - 1]}`)
        
            // * call this function to get balance
            // ? should getBalance be in blockchain.js
            function getBalance() {
                let nothing = 'no credits or debits';
                let credits = [];
                let debits = [];

                // * for loop through every block, so you can forEach loop through the transactions in each block
                for(let i = 0; i < blocks.length; i++){
                    if(blocks[i].transactions == []){
                        console.log(`pushing 0 to credits array`)
                        credits.push(0)

                    // * need to iterate through each transaction in the block's transactions to get their addresses
                    // * check each transaction toAddress and fromAddress against the user's entered address
                    // * to see if they were the sender or receiver
                    } else if(blocks[i].transactions !== []){
                        blocks[i].transactions.forEach(transaction => {
                            if(transaction.toAddress == req.body.address){
                            credits.push(transaction.amount)
                            } else if(transaction.fromAddress == req.body.address){
                                debits.push(transaction.amount)
                            }
                        })
                    } else {
                        res.json(nothing)
                    }
                }

                // * add up all credits
                let sumCredits = 0;
                for (let credit of credits)
                sumCredits += credit;
                
                // * add up all debits
                let sumDebits = 0;
                for (let debit of debits)
                sumDebits += debit;

                // * subtract debits from credits
                let balance = sumCredits - sumDebits
                
                console.log(`this is getBalance: ${balance}`)
                res.json(balance)
            }

            // * call function
            getBalance();
    }})
})

// * create user
app.post('/user', (req, res)=>{
    // * initialize user with body of data entered by client
    let user = req.body
    // * generate a key pair for the user
    const key = ec.genKeyPair();

    // * create and store a user model for this user in the database
    // * this will initialize their public and private keys for them 
    // * to do transactions, and send json to client
    UserModel.create({
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
        publicKey: key.getPublic('hex'),
        privateKey: key.getPrivate('hex')
        },
        (error, result)=>{
            if(error){
                console.log(`error creating user: ${error}`)
                res.json(error)
            } else{
                console.log(`Created user: ${result}`)
                res.json(user)
        }})
    })

// ! left over todo app stuff
app.delete('/todos/:id', (req, res)=>{
    let requestedToDoId = req.params.id
    TodoModel.findById(requestedToDoId, (error, result)=>{
        if(error){
            console.log(`error: ${error}`)
        } else{
            console.log(`result: ${result}`)

            DeleteModel.create({
                description: result.description,
                isComplete: result.isComplete
            })
        }
    })
    TodoModel.findByIdAndDelete(requestedToDoId, (error, result)=>{
        if(error){
            console.log(`error: ${error}`)
        } else{
            console.log(`result: ${result}`)
            res.json(result)
        }
    })
})


// * handles route errors
app.get('*', (req, res)=>{
    var errors = ["You broke this", "Ouch, you broke me!", "Game over...", "Wrong way!"];
    var pageError = errors[[Math.floor(Math.random() * errors.length)]];
    res.send(pageError);
});

// * port
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App on port: ${port}`));