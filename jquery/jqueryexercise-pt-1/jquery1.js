//PART 1

//Number 1
//When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
$(function(){
    console.log("Let's get ready to party with jQuery")
})

//Number 2
//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

let $article = $("img").addClass("image-center");

//Number 3
// Remove the last paragraph in the article.
let $removeParagragh = $("p").eq(5).remove();

//Number 4
//Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
let $h1 = $("#title").css("font-size", (Math.random() * 101))

//Number 5
//Add an item to the list; it can say whatever you want.
let $newList = $("<li>").text("Hi, I am working with jQuery");
$("ol").append($newList);

//Number 6
//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$("aside").empty();
let $newParagragh = $("<p>").text("Apologies for a haphazard-looking list, I have fixed it!");
$("aside").append($newParagragh);

//Number 7
//When you change the numbers in the three inputs on the bottom, the background color of the body should change 
//to match whatever the three values in the inputs are.
$("input").on("change",function(){
    let $red = $("input").eq(0).val();
    let $blue = $("input").eq(1).val();
    let $green = $("input").eq(2).val();

     $("body").css("background-color",`rgb(${$red},${$green},${$blue})`);
})

//Number 8
//Add an event listener so that when you click on the image, it is removed from the DOM.

$(function(){
    $("img").on("click", function(){
        $("img").remove();
    })
});


