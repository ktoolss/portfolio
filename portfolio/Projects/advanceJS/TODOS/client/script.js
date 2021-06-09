// NOTE: Original trial class code

// endpoint is where you want to go to consume some data, base url and route

// In client side I was my base URL for the website
const baseUrl = "http://localhost:3000";

// front end puts urls in Events with fetch() not Routes with express()

// READ - the following code just sets up the front page
$(document).ready(function(){
    let endpoint = `${baseUrl}/todos`;
    // line below does get request on server for data to load page
    fetch(endpoint, {
        method: "GET"   // this is a request object
    })
    .then(function(response){
        if(!response.ok){
            throw Error("no response")
        } else {
            return response.json();
        }
    })
    .then(function(dataArray){
        console.log(dataArray);
        // before the page loads, you need to empty the current ul
        $("ul").empty();
        // rebuild the ul with this foreach and append
        dataArray.forEach(function(toDo){
            // set the js var to completed using a string and change the css class by inserting in html
            let completed = toDo.isComplete ? "completed" : "";
            $("ul").append(
                `<li data-id = ${toDo.id} class=${completed}>${toDo.description}<span><i class='far fa-trash-alt'></i></span></li>`
                );
        })
    })
    .catch(function(error){
        console.error("Issues reading the data", error);
    })

})


// CREATE - the following code makes and sends a new todo
$("input").keypress(function (event) {
    console.log(event);
    // which refers to the event that just happened
    if (event.which === 13 && $(this).val()) {
        // create a newToDoItem object with the value entered in the input before "enter"
    var newToDoItem = {
        description: $(this).val()
    };
    let endpoint = `${baseUrl}/todos`;

    // fetch the endpoint with a post method so the server knows the use app.post
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(newToDoItem),
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
    .then(function(newToDo){
        // set the data-id and description using the data from the server response because the server gives you a new ID and isComplete 
        $("ul").append(
            `<li data-id=${newToDo.id}>${newToDo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
            // empty out the input tag after you append the ul
        $("input").val("");
    })
    .catch(function(error){
        console.error("issues with creating data on backend");
    })

    
    }
});

// UPDATE
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

$('div').on('click', 'p', function () {
    $(this).hide(5000).show(5000).hide(2000);
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



