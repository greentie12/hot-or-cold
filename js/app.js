$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $("a.new").click(function(event) {
    	event.preventDefault();
    	count = 0;
    	$('#feedback').html("Make your Guess!").css({ "background-color": "#cc324b", "color": "white", "font-weight": "bold" });
    	$('#count').html(count);
    	$('#guessList').html(" ");
    	//$('#userGuess.text').html(" ");

    });

    var compNum = Math.floor(Math.random() * 100 + 1);
    var count = 0;

    /*---Start New Game---*/
    $("#guessButton").click(function(event) {
        event.preventDefault();
        count++;
        var guess = $('#userGuess').val();

        if (guess == compNum) {
            //$('#guessList').append("Congratulations. You have guessed the number!");
            $('#feedback').html("Congratulations. You have guessed the number!").css({ "background-color": "#cc324b", "color": "white", "font-weight": "bold" });
        } else if (Math.abs(compNum - guess) <= 10 && Math.abs(compNum - guess) > 0) {
            $('#guessList').append(guess + " ");
            $('#feedback').html("Very Hot!").css({ "background-color": "#cc324b", "color": "white", "font-weight": "bold" });
            $('#count').html(count);
        } else if (Math.abs(compNum - guess) > 10 && Math.abs(compNum - guess) <= 20) {
            $('#guessList').append(guess + " ");
            $('#feedback').html("Hot!").css({ "background-color": "#ff8282", "color": "white", "font-weight": "bold" });
            $('#count').html(count);
        } else if (Math.abs(compNum - guess) > 21 && Math.abs(compNum - guess) < 30) {
            $('#guessList').append(guess + " ");
            $('#feedback').html("Warm").css({ "background-color": "#FFA500", "color": "black", "font-weight": "bold" });
            $('#count').html(count);
        } else {
            $('#guessList').append(guess + " ");
            $('#feedback').html("Cold").css({ "background-color": "#82CFFD", "color": "black", "font-weight": "bold" });
            $('#count').html(count);
        }
    });
});
