$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    /*---Start New Game---*/
    $("a.new").click(function(event) {
        event.preventDefault();

        /*--- Initialize everything back to 0 or empty ---*/
        count = 0;
        $('#feedback').html("Make your Guess!").css({ "background-color": "#cc324b", "color": "white", "font-weight": "bold" });
        $('#count').html(count);
        $('#guessList').html(" ");
        $('#userGuess').val("");
    });

    /*--- Generate a random number between 1 - 100 ---*/
    var compNum = Math.floor(Math.random() * 100 + 1);

    /* --- create a count variable and set it to 0 --- */
    var count = 0;

    /* --- User inputs a number and clicks the guess button --- */
    $("#guessButton").click(function(event) {
        event.preventDefault();

        /*--- count variable goes up by one on each click --- */
        count++;
        var guess = $('#userGuess').val();

        /*--- if / else conditions to test for closeness ---*/
        if (guess == compNum) {
            $('#feedback').html("Congratulations. You have guessed the number!").css({ "background-color": "#cc324b", "color": "white", "font-weight": "bold" });
        } else if (Math.abs(compNum - guess) <= 10 && Math.abs(compNum - guess) > 0) {
            $('#guessList').append("<li>" + guess + "</li>");
            $('#userGuess').val("");
            $('#feedback').html("Very Hot!").css({ "background-color": "#cc324b", "color": "white", "font-weight": "bold" });
            $('#count').html(count);
        } else if (Math.abs(compNum - guess) > 10 && Math.abs(compNum - guess) <= 20) {
            $('#guessList').append("<li>" + guess + "</li>");
            $('#userGuess').val("");
            $('#feedback').html("Hot!").css({ "background-color": "#ff8282", "color": "white", "font-weight": "bold" });
            $('#count').html(count);
        } else if (Math.abs(compNum - guess) > 21 && Math.abs(compNum - guess) < 30) {
            $('#guessList').append("<li>" + guess + "</li>");
            $('#userGuess').val("");
            $('#feedback').html("Warm").css({ "background-color": "#FFA500", "color": "black", "font-weight": "bold" });
            $('#count').html(count);
        } else {
            $('#guessList').append("<li>" + guess + "</li>");
            $('#userGuess').val("");
            $('#feedback').html("Cold").css({ "background-color": "#82CFFD", "color": "black", "font-weight": "bold" });
            $('#count').html(count);
        }
    });
});
