function initialize(){
    
    $(document).ready(function() {
        var $theForm = $('[data-coffee-order="form"]')
        $theForm.on('submit', function(event){
            event.preventDefault();
            console.log(getData());
        });
    });
    
}
initialize();

function pushData(){

}

function getData(){
    $formData = $('[data-target="grab-this"]');
    var formData = [];
    $formData.each(function(i, thing){
        formData.push(thing.value);
    })
    return formData;   
}

