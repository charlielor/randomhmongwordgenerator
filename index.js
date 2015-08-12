$(document).ready(function() {
    var consonants = [];
    var vowels = [];
    var tones = [];

    var consonant = $("#consonant");
    var vowel = $("#vowel");
    var tone = $("#tone");


    var generateButton = $("#generate");

    $.getJSON("config/letters.json", function(letters) {

        if (letters != null) {
            if (isArrayEmpty(letters["consonants"])) {
                consonants = letters["consonants"];
            } else {
                console.log("Unable to load consonants");
            }

            if (isArrayEmpty(letters["vowels"])) {
                vowels = letters["vowels"];
            } else {
                console.log("Unable to load vowels");
            }

            if (isArrayEmpty(letters["tones"])) {
                tones = letters["tones"];
            } else {
                console.log("Unable to load tones");
            }
        } else {
            console.log("Unable to load letters.json");
        }

    });


    generateButton.on("click", function() {
        consonant.css("margin-right", "50px");
        vowel.css("margin-left", "50px");
        vowel.css("margin-right", "50px");
        tone.css("margin-left", "50px");

        var count = 0;

        var randomInterval = setInterval(function() {
            consonant.text(consonants[randomInt(consonants.length)]);
            vowel.text(vowels[randomInt(vowels.length)]);
            tone.text(tones[randomInt(tones.length)]);

            count++;

            if (count == 100) {
                window.clearInterval(randomInterval);
                consonant.css("margin-right", "0px");
                vowel.css("margin-left", "0px");
                vowel.css("margin-right", "0px");
                tone.css("margin-left", "0px");
            }
        }, 1);



    });

    function isArrayEmpty(a) {
        return ((a !== null) && (a !== undefined) && (a.length !== 0));
    }

    function randomInt(num) {
        return (Math.floor(Math.random() * num));
    }

    function generateWord() {

    }

});

