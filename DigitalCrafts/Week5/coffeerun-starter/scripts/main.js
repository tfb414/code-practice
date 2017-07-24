const URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';

function initialize(){
    var $theForm = $('[data-coffee-order="form"]');
    // console.log($theForm);
    
    $(document).ready(function() {
        
        $theForm.on('submit', function(event){
            event.preventDefault();
            sendDataToLocalStorage(format($theForm));
            sendDataToServer(format($theForm));
            addLastDisplayBox(format($theForm));
            $('[data-coffee-order="form"]').trigger('reset');
        });
    
    getServerData(URL)
        .then(createDisplayBox)
        .then(buttonEventListener);
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

function getServerData(URL){
    return $.get(URL);
}

function sendDataToServer(data){
    var currentData = {};
    $.post(URL, data, function(message){
        console.log(message);
    });
}

function displayData(data){
    console.log(data);
}



function createDisplayBox(data){
    
    var tempDiv = $('[data-target="display-orders"]');
    Object.keys(data).forEach(function(key){
        var individualOrderDiv = $("<div>", {
            'class': 'box',
            'data-target': 'box',
        });
        console.log(data[key])
    individualOrderDiv.append(createEachElementDiv(data[key]));
    individualOrderDiv.append(createButton(data[key]["emailAddress"], "Delete"));
    individualOrderDiv.append(createButton(data[key]["emailAddress"], "Edit"));
    tempDiv.append(individualOrderDiv);

        
    });
    $('[data-target="display-orders"]').append(tempDiv);

}

function addLastDisplayBox(data){
    var tempDiv = $('[data-target="display-orders"]');
    var individualOrderDiv = $("<div>", {
            'class': 'box',
            'data-target': 'box',
        });
    individualOrderDiv.append(createEachElementDiv(data));
    individualOrderDiv.append(createButton(data["emailAddress"], "Delete"));
    individualOrderDiv.append(createButton(data["emailAddress"], "Edit"));
    tempDiv.append(individualOrderDiv);
    $('[data-target="display-orders"]').append(tempDiv);
}



function createEachElementDiv(object){
    return Object.keys(object).map(function(key){
        if(key !== "_id" && key !== "__v"){
            return $('<div>', {
            'class': 'individual-info',
            text: key + " : " +  object[key]
            });
        
        }
        
    })
}

function createButton(dataTargetbyId, textOnButton){
    var dataName = "data-target-" + textOnButton;
    return $('<button>', {
        [dataName]: dataTargetbyId,
        text: textOnButton,
        'class': 'individualOrderButtons'
    })
}

function deleteData(dataTarget){
    console.log(dataTarget.parent);
    return $.ajax({
        url: URL + '/' + dataTarget,
        method: 'DELETE',
    });
}

function buttonEventListener(){
    var $buttons = $("button.individualOrderButtons");
    $buttons.on("click", function(event){
        event.preventDefault();
        if(Object.keys(event.target.dataset) == "targetEdit"){
        }
        if(Object.keys(event.target.dataset) == "targetDelete"){
            deleteData(event.target.dataset.targetDelete).then(refreshData);
            $(this).parent().remove();
        }
        
    });
}



function refreshData(){
    $('[data-target="display-orders"]').empty();
    getServerData(URL)
        .then(createDisplayBox)
        .then(buttonEventListener);
}

//add validation
//previous orders hide stuff
//createa a class when you pull in the data
//when they submit wipe the data
//when pulling down the data check to see if the ajax request goes through and if it does then pull it if not grab it from local storage