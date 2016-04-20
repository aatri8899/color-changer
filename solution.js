var colors = ["yellow", "purple", "green", "black"];
function changeColor () {
    var randomIndex = Math.floor((Math.random() * colors.length) + 0);
    $("body").css("background-color", colors [randomIndex]);
}

function addColor(){
  var newColor= $("#newColor").val();
  colors[colors.length]= newColor;
  $("body").css("background",  colors[colors.length]);
}

     $(document).ready(function(){
         $("#change").click(changeColor);
         $("#add").click(addColor);
     });   
    
