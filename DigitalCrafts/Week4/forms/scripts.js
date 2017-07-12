function main(){
    $(document).ready(function() {
    // var height = $(".survey-box").height();
    // var width = $(".survey-box").width();
    // $("#return-shape").html('<canvas id="canvas" width=width height=height style="border:1px solid #000000;">');

    $("#getData").click(function(){
        
        // $(".return-name").text(document.getElementsById("nameID").value);
        $("#return-name").text(document.getElementById("nameID").value);
        $("#return-age").text(document.getElementById("ageID").value);
        $("#return-super-power").text(document.getElementById("super-powerID").value);
        let colorOfShape = String(document.getElementById("color").value);
        if (document.getElementById("shape").value === "Rectangle"){
            // canvas.clearRect(0, 0, canvas.width,canvas.height);
            drawRect(colorOfShape);
        }
        if (document.getElementById("shape").value === "Triangle"){
            // context.clearRect(0, 0, context.width,context.height);
            drawTriangle(colorOfShape);
        }
        if (document.getElementById("shape").value === "Circle"){
            // context.clearRect(0, 0, context.width,context.height);
            drawCircle(colorOfShape);
            console.log("ready");
        }
        
    });

});
}
main();   

function drawRect(colorOfShape) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = colorOfShape;
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.fillRect(25, 25, 100, 100);
        ctx.fillStyle = colorOfShape;
    }
}
function drawTriangle(colorOfShape) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = colorOfShape;
        ctx.clearRect(0, 0, ctx.width,ctx.height);
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
       
    }
}

function drawCircle(colorOfShape) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = colorOfShape;
        ctx.clearRect(0, 0, ctx.width,ctx.height);
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}