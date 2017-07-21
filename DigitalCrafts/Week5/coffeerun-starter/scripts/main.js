function initialize(){
    
    $(document).ready(function() {
        var $theForm = $('[data-coffee-order="form"]')
        $theForm.on('submit', function(event){
            event.preventDefault();
            // console.log($theForm.serializeArray());
            
            pushDataToLocalStorage(format($theForm));
        });
        var refreshPage = function(){
            pushDataToLocalStorage(format($theForm));
        }
        var reloadedPage = function(){
            pullDataFromLocalStorage('data');
        }
        
        window.onbeforeunload = refreshPage();
        window.onload = reloadedPage();

    });
    
}
initialize();

// function pushInfoBack

function pushDataToLocalStorage(data){
    
    var name = data['coffee'];
    localStorage.setItem(name, JSON.stringify(data));
}
function pullDataFromLocalStorage(stringifiedJSONName){
    var JSONOrder = JSON.parse(localStorage.getItem(stringifiedJSONName));
    var keys = Object.keys(stringifiedJSONName);
    keys.forEach(function(key){
        console.log(JSONOrder[key]);
        if (JSONOrder[key] !== null){
            document.getElementById(key).value = key;
        }
    })
}

function format(data){
    var dataObject = {};
    data.serializeArray().forEach(function(thing){
        dataObject[thing.name] = thing.value;
    })
    return dataObject;
}

