// Change color of list item to grey with a line through on click
$("ul").on("click", "li", function() {
    // Toggle the class completed when list item is clicked on add/remove class
    $(this).toggleClass("list-check");
});

// Delete list items when X is clicked
// function(event) stops event bubbling
$("ul").on("click", "span", function(event) {
    // .parent targets the li
    $(this).parent().fadeOut(500, function() {
        // .remove inside a callback function so that item is removed only after fadeOut is done
        $(this).remove();
    });
    event.stopPropagation();
});

// Creating new list items when enter is pressed on input
$("input[type='text']").keypress(function() {
    if(event.which === 13) {
        // .val retrieves the input value and stores it into userInput variable
        var userInput = $(this).val();
        // clear the input to an empty string
        $(this).val("");
        // create a new li and add to ul from the retrieved value
        $("ul").append("<li class='list-item'><span><i class='fas fa-trash'></i></span> " + userInput + "</li>");
    }
});

$(".fa-list").on('click', function() {
    $("input[type='text']").fadeToggle();
});