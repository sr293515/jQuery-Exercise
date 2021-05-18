// Question #1
$( document ).ready(function() {
    console.log("Let’s get ready to party with jQuery!")
});

// Question #2
$( "article img" ).addClass( "image-center" );

// Question #3
$("p:eq(-1)").remove()

// Question #4
$("h1").css('font-size', Math.random() * 100,'px')

// Question #5
$("ol").append("<li>Stiven</li>")

// Question #6
let emptyAside = $("aside").empty();
emptyAside.append("<p>Sorry for the list!</p>")

// Question #7
$(".form-control").on('keyup', function () { 
let red = $(".form-control").eq(0).val();
let blue = $(".form-control").eq(1).val()
let green = $(".form-control").eq(2).val()
$("body").css('background-color', "rgb(" + red + "," + green + "," + blue + ")");
})

$("img").on('click', function(){
    this.remove()
})