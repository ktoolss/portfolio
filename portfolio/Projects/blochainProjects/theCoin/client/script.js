
const baseUrl = "http://localhost:3000";

// ? front end puts urls in Events with fetch() not Routes with express()

// ! need to switch client to EJS

// * GET blockchain - the following code just sets up the front page
$(document).ready(function(){
    let endpoint = `${baseUrl}/blockchain`;
    // * fetch does get request on server for data to load page
    fetch(endpoint, {
        method: "GET" 
    })
    .then(function(response){
        if(!response.ok){
            throw Error("no response")
        } else {
            // * parse resonse
            return response.json();
        }
    })
    .then(function(blocks){
        // * use the blocks from the parsed response to fill data in html
        console.log(blocks)
        console.log(`fetched blocks from document.ready: ${blocks}`);
        // * humanize the timestamp 
        let date = new Date(blocks[blocks.length - 1].timestamp);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let seconds = date.getSeconds();
        
        // * fill html with data
        $("#lastBlock").append(
            `<h1 data-id = ${blocks[blocks.length - 1]._id}>Last block mined: ${month + 1}-${day}, ${year} - ${hours}:${minutes}:${seconds}</h1>`
            );
            
            
    })
    .catch(function(error){
        console.error("Issues reading the data", error);
    })

})




// * POST transactions
$("#transactionForm").keypress(function (event) {
    console.log(event);
    // * which refers to the event that just happened
    // * this makes sure you hit enter and all of these values aren't empty
    // ? need to add user validation
    if (event.which === 13 && $('#from').val() && $('#to').val() && $('#sendAmount').val()) {
        // * stop page from reloading
        event.preventDefault();

        // * create a newTransaction object with the value entered in the inputs
        var newTransaction = {
            fromAddress: $('#from').val(), 
            toAddress: $('#to').val(), 
            amount: $('#sendAmount').val()
        };
        // * endpoint
        let endpoint = `${baseUrl}/transaction`;

        // * fetch the endpoint with a post method so the server knows the use app.post
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(newTransaction),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("issues")
            } else {
                // * parse response
                return response.json();
            }
        })
        .then(function(receipt){
            console.log(`this is the receipt: ${receipt}`)

            // * add receipt data to html
            $("#transactionP").append(
                `<p data-id=${""}>You sent ${receipt} units to your buddy.</p>`
                );
            // * empty out the input tag after you append the ul
            $("input").val("");
        })
        .catch(function(error){
            console.error("issues with creating data on backend");
        })
    }
});

// * POST mine block
$("#mineForm").keypress(function (event) {
    console.log(event);
    // * which refers to the event that just happened
    // * this checks if you hit enter and the reward address was entered by the miner
    if (event.which === 13 && $('#minerInput').val()) {
        // * stop page from reloading
        event.preventDefault();

        // * initialize a rewardAddress object with the value entered in the input
        var rewardAddress = {
            fromAddress: $('#minerInput').val(), 
        };
        // * endpoint
        let endpoint = `${baseUrl}/mineBlock`;

        // * fetch the endpoint with a post method so the server knows the use app.post
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(rewardAddress),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("issues")
            } else {
                // * parse json
                return response.json();
            }
        })
        .then(function(receipt){
            console.log(`receipt is: ${receipt.amount}`);

            // * add receipt data to html
            $("#mineP").append(
                `<p data-id=${""}>${receipt.amount} units reward send to your address</p>`
                );

            // * empty out the input tag after you append the ul
            $("input").val("");
        })
        .catch(function(error){
            console.error("issues with creating data on backend");
        })
    }
});

// * POST Wallet
$("#walletForm").keypress(function (event) {
    console.log(event);
    // * which refers to the event that just happened
    // * make sure wallet address isn't empty when you hit enter
    if (event.which === 13 && $('#walletInput').val()) {
        // * stop page from reloading
        event.preventDefault();

        // * initialize userWallet object with the value entered in the input
        let userWallet = {
            address: $('#walletInput').val() 
        };

        // * endpoint
        let endpoint = `${baseUrl}/wallet`;

        // * fetch the endpoint with a post method so the server knows the use app.post
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(userWallet),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("issues")
            } else {
                // * parse json
                return response.json();
            }
        })
        .then(function(balance){
            console.log(`this is balance in script: ${balance}`)

            // * add balance data to html
            $("#walletP").append(
                `<p data-id=${""}>The balance in your wallet is: ${balance} units.</p>`
                );

            // * empty out the input tag after you append the ul
            $("input").val("");
        })
        .catch(function(error){
            console.error("issues with creating data on backend");
        })    
    }
});

// * POST - User
$("#userForm").keypress(function (event) {
    console.log(event);
    // * which refers to the event that just happened
    if (event.which === 13 && $('#firstName').val() && $('#lastName').val() && $('#email').val() && $('#password').val()) {
        event.preventDefault();

        // * initialize newUser object with the value entered in the input
        var newUser = {
            firstName: $('#firstName').val(), 
            lastName: $('#lastName').val(), 
            email: $('#email').val(),
            password: $('#password').val()
        };
        let endpoint = `${baseUrl}/user`;

        // * fetch the endpoint with a post method so the server knows the use app.post
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("issues")
            } else {
                // * parse json
                return response.json();
            }
        })
        .then(function(user){
            console.log(`this is the new user: ${user}`)

            // * add user data to html
            $("#userP").append(
                `<p data-id=${""}>You created ${user.firstName}'s new account.</p>`
                );
            // * empty out the input tag after you append the ul
            $("input").val("");
        })
        .catch(function(error){
            console.error("issues with creating data on backend");
        })
    }
});

// ! everything below this comment is just for templates

// UPDATE TODOS
$("ul").on("click", "li", function () {
    // access the li data-id with 'this' key word in Jquery
    let thisId = $(this).data('id');
    // include the li id in the url
    let endpoint = `${baseUrl}/todos/${thisId}`;
    let self = this;
    fetch(endpoint, 
        {
            // fetch PUT object so the server knows it's a PUT
            method: "PUT"
        }
    ) // after you fetch with the url and your PUT object, you get a response from the server to deal with
    .then(function(response){
        if(!response.ok){
            throw Error("cannot update")
        } else {
            return response.json();
            // this returned json we call data and passes to the next .then
        }
    })
    .then(function(data){
        // if this function gets any json data at all, it will trigger the tooggleClass
    $(self).toggleClass("completed");
    })
    .catch(function(error){
        console.log(`error updating data from back end. Error: ${error}`)
    })
});


// for mining?
$('div').on('click', 'button', function () {
    let endpoint = `${baseUrl}/mineBlock`;
    // fetch the endpoint with a post method so the server knows the use app.post
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(fromAddress),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        if(!response.ok){
            throw Error("issues")
        } else {
            return response.json();
        }
    })
    .then(function(newBlock){
        // set the data-id and description using the data from the server response because the server gives you a new ID and isComplete 
        $("ul").append(
            `<li data-id=${newBlock.hash}>${newBlock.transactions}<span><i class='far fa-trash-alt'></i></span></li>`
            );
            // empty out the input tag after you append the ul
        $("input").val("");
    })
    .catch(function(error){
        console.error("issues with creating data on backend");
    })
    console.log(`uh oh you did it`);
})

// DELETE
$("ul").on("click", "span", function (event) {
    console.log(event);
    // stop the bubbling propagation
    event.stopPropagation();
    // parent of span is list element
    let thisId = $(this).parent().data('id');
    let endpoint = `${baseUrl}/todos/${thisId}`;
    let self = this;

    fetch(endpoint,
        {   // detch DELTETE object so server knows it's app.delete
            method: "DELETE"
        })
    .then(function(response){
        if(!response.ok){
            throw Error("cannot delete");
        } else {
            return response.json();
        }
    })
    .then(function(data){
        console.log(data)
        $(self).parent().remove();
    })
    .catch(function(error){
        console.error("Issue with deleting from backend");
    })
});


