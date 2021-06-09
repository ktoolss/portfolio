const { response } = require("express");

const baseUrl = "http://localhost:3000";

$(document.readyState(function(){
    let endpoint = `${baseUrl}/todos`;
    fetch(endpoint)
    .then(function(response){
        if(!status.ok){
            throw Error('uh-oh no response')
        } else {
            return response.json();
        }
    })
    .then(function(dataArray){
        $('ul').empty();
        dataArray.forEach(function(toDo){
            let completed = toDo.isComplete ? 'completed' : "";
            $('ul').append(
                `<li data-d=${toDo.id} class=${completed}>${toDo.description}<span><i class='far fa-trash-alt'></i>
            )
        })
    })
}))