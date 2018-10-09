function letter(letter)
{
    this.letter = letter;
    this.userGuessed = false;

    this.getChar = function()
    {
        if(!this.userGuessed)
        {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.checkletter = function(guess)
    {
        if(guess === this.letter)
        {
            this.userGuessed = true;
        }
    }
}

module.exports = letter;