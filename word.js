var Letter = require('./letter.js');

function Word(wrd) {
    // var that = this;

    this.word = wrd;

    this.letters = [];
    this.wordFound = false;

    this.getLets = function() {
        //populate the collection above with new Letter objects
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    };

    //checks if word is found
    this.didWeFindTheWord = function() {
        if (this.letters.every(function(lttr) {
                return lttr.appear === true;
            })) {
            this.wordFound = true;
            return true;
        }

    };

    this.checkIfLetterFound = function(guessedLetter) {
        var whatToReturn = 0;
        //iterates through each letter to see if it matches the guessed letter
        this.letters.forEach(function(lttr) {
            if (lttr.letter === guessedLetter) {
                lttr.appear = true;
                whatToReturn++;
            }
        })
        //if guessLetter matches Letter property, the letter object should be shown
        return whatToReturn;
    };

    this.wordRender = function() {
        var display = '';
        //render the word based on if letters are found or not
        //that
        this.letters.forEach(function(lttr) {
            var currentLetter = lttr.letterRender();
            display += currentLetter;
        });

        return display;
    };
}

module.exports = Word;
