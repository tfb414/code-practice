
$(document).ready(function() {
    console.log("ready");
    $("#getData").click(function(){
        // $(".return-name").text(document.getElementsById("nameID").value);
        $("#return-name").text(document.getElementById("nameID").value);
        $("#return-age").text(document.getElementById("ageID").value);
        $("#return-super-power").text(document.getElementById("super-powerID").value);
    });

});
 