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
        pushTempDataToLocalStorage(format($theForm));
    }
    window.onload = function(even){
        addDataBackToForm(pullDataFromLocalStorage('tempData'));
    }
}
initialize();

function pushDataToLocalStorage(data){
    if (pullDataFromLocalStorage('coffeeRun') == null) {
        var currentData = {}; 
    }
    else{
        var currentData = pullDataFromLocalStorage('coffeeRun');
    }
    currentData[data['emailAddress']] = data
    localStorage.setItem('coffeeRun', JSON.stringify(currentData));
}

function pushTempDataToLocalStorage(data){
    localStorage.setItem('tempData', JSON.stringify(data));
}

function pullDataFromLocalStorage(stringifiedJSONName){
    return JSON.parse(localStorage.getItem(stringifiedJSONName));
    
}

function addDataBackToForm(JSONOrder){
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