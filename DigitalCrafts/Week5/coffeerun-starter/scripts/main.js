const URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';

function initialize(){
    var $theForm = $('[data-coffee-order="form"]')
    // $('[data-target="display-orders"]').text('test');
    getServerData();
    $(document).ready(function() {
        $theForm.on('submit', function(event){
            event.preventDefault();
            sendDataToLocalStorage(format($theForm));
            // sendDataToServer(format($theForm));
        });
    });

    window.onbeforeunload = function(event){
        pushTempDataToLocalStorage(format($theForm));
    }
    window.onload = function(even){
        addDataBackToForm(pullDataFromLocalStorage('tempData'));
    }
}
initialize();

function sendDataToLocalStorage(data){
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

function getServerData(){
    
    $.get(URL, function(data){
        var keys = Object.keys(data);
        // console.log(data["derp@derp.com"]);
        keys.forEach(function(element){
            var elementKeys = Object.keys(data[element]);
            elementKeys.forEach(function(elementKeys){
                $('[data-target="display-orders"]').append("<div>" + elementKeys + "</div>");
            });
                
        });
        // $('[data-target="display-orders"]').text(data);
        console.log(data);
    })
}

function printObject(object){
    var keys = Object.keys(object);
    keys.forEach(function(element){
        console.log(element)
        return(element);
    });

}

function sendDataToServer(data){
    var currentData = {};
    $.post(URL, data, function(message){
        console.log(message);
    });

}
