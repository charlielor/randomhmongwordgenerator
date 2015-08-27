$(document).ready(function() {
    var consonants = [];
    var vowels = [];
    var tones = [];

    var consonantBlock = $("#consonantBlock");
    var consonant = $("#consonant");
    var consonantImage = $("#consonantImage");

    var vowelBlock = $("#vowelBlock");
    var vowel = $("#vowel");
    var vowelImage = $("#vowelImage");

    var toneBlock = $("#toneBlock");
    var tone = $("#tone");
    var toneImage = $("#toneImage");

    var generateButton = $("#generate");
    var generated = false;

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

    consonant.hover(function() {
        if (getImage("consonant", consonant.text().toLowerCase())) {
            $(document).mousemove(function(event) {
                consonantImage.show();
                consonantImage.css({
                    "position":"absolute",
                    "left":event.clientX ,
                    "top":event.clientY
                });
            });

        }
        }, function() {
            $(document).unbind("mousemove");
            consonantImage.hide();
        }
    );


    vowel.mouseover(function() {
        console.log(vowel.text());
    });

    tone.hover(function() {
        if (getImage("tone", tone.text().toLowerCase())) {
            $(document).mousemove(function(event) {
                toneImage.show();
                toneImage.css({
                    "position":"absolute",
                    "left":event.clientX ,
                    "top":event.clientY
                });
            });

        }
        }, function() {
            $(document).unbind("mousemove");
            toneImage.hide();
        }
    );


    generateButton.on("click", function() {
        consonantBlock.css("margin-right", "50px");
        vowelBlock.css("margin-left", "50px");
        vowelBlock.css("margin-right", "50px");
        toneBlock.css("margin-left", "50px");

        var count = 0;

        if (!generated) {
            generated = true;
        }

        var randomInterval = setInterval(function() {
            consonant.text(consonants[randomInt(consonants.length)]);
            vowel.text(vowels[randomInt(vowels.length)]);
            tone.text(tones[randomInt(tones.length)]);

            count++;

            if (count == 100) {
                window.clearInterval(randomInterval);
                consonantBlock.css("margin-right", "0px");
                vowelBlock.css("margin-left", "0px");
                vowelBlock.css("margin-right", "0px");
                toneBlock.css("margin-left", "0px");
            }
        }, 1);



    });

    function isArrayEmpty(a) {
        return ((a !== null) && (a !== undefined) && (a.length !== 0));
    }

    function randomInt(num) {
        return (Math.floor(Math.random() * num));
    }

    function getImage(type, letter) {
        if (generated) {
            switch (type) {
                case "consonant":
                    consonantImage.attr("src", "images/consonants/" + letter + ".png");
                    return (consonantImage != null);
                    break;
                case "vowel":
                    break;
                case "tone":
                    toneImage.attr("src", "images/tones/" + letter + ".png");
                    return (toneImage != null);
                    break;
                default:
                    console.log("Can't load image because type is invalid");
                    break;
            }
        }
    }

    function generateWord() {

    }

});

