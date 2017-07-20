function initialize(){
    
    $(document).ready(function() {
        var $theForm = $('[data-coffee-order="form"]')
        $theForm.on('submit', function(event){
            event.preventDefault();
            // console.log($theForm.serializeArray());
            
            push(format($theForm));
        });
    });
    
}
initialize();

function push(data){
    var keys = Object.keys(data);
    keys.forEach(function(thing){
        // console.log(data);
        console.log(thing);
        console.log(data[thing])
        localStorage.setItem(thing, data.thing);
    })
}

// function getData(){
//     $formData = $('[data-target="grab-this"]');
//     var formData = [];
//     $formData.each(function(i, thing){
//         formData.push(thing.value);
//     })
//     return formData;   
// }

function format(data){
    var dataObject = {};
    data.serializeArray().forEach(function(thing){
        dataObject[thing.name] = thing.value;
    })
    console.log(dataObject);
    return dataObject;
}
