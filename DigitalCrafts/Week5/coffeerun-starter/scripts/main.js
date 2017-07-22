function initialize(){
    var $theForm = $('[data-coffee-order="form"]')
    $(document).ready(function() {
        
        $theForm.on('submit', function(event){
            event.preventDefault();
            pushDataToLocalStorage(format($theForm));
        });
    // console.log(localStorage.getItem('coffeeRun'));
    });

    window.onbeforeunload = function(event){
        pushDataToLocalStorage(format($theForm));
    }
    window.onload = function(even){
        addDataToForm(pullDataFromLocalStorage('coffeeRun'));
    }
}
initialize();

function pushDataToLocalStorage(data){
    localStorage.setItem('coffeeRun', JSON.stringify(data));
}

function pullDataFromLocalStorage(stringifiedJSONName){
    return JSON.parse(localStorage.getItem(stringifiedJSONName));
    
}

function addDataToForm(JSONOrder){
    var keys = Object.keys(JSONOrder);
    keys.forEach(function(key){
        if (JSONOrder[key] !== ""){
            document.getElementsByName(key)[0].value = JSONOrder[key];   
        }
    })
}

function format(data){
    var dataObject = {};
    data.serializeArray().forEach(function(key){
        dataObject[key.name] = key.value;
    })
    return dataObject;
}




// var URL =
// $.get(URL, function(data){
//     console.log(data);
// });

// function storeData(){
//     this sets the item
// }

// var URL =
// // $.get(URL, function(data){
// //     console.log(data);
// // });
// $.get(URL, storeData)

// .post(URL, myData, function(resp){
//     console.log(resp);
// })

// myData = {
//     coffeeOrder: 'espresso',
//     emailAddress: "email@email.com",
// };


// //send out to the server get it back and set it ot the local storage