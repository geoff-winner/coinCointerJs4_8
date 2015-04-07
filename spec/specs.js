describe('pigLatin', function(){

    it("it adds 'ay' to the end of a singular letter word start with a vowel", function(){
        expect(pigLatin('a')).to.equal('aay');
    });

    it("it adds 'ay' to the end of e singular letter word start with e vowel", function(){
        expect(pigLatin('e')).to.equal('eay');
    });

    it("it adds 'ay' to the end of 2 characters word start with a vowel", function(){
        expect(pigLatin('an')).to.equal('anay');
    });

    it("it adds 'ay' to the end of 4 characters word start with a vowel", function(){
        expect(pigLatin('undo')).to.equal('undoay');
    });

    it("it adds 'ay' to the end of 2 characters word start with a consonant", function(){
        expect(pigLatin('be')).to.equal('ebay');
    });

    it("it adds 'ay' to the end of a word start with 2 consonants", function(){
        expect(pigLatin('play')).to.equal('ayplay');
    });

    it("it adds 'ay' to the end of a word start with 2 consonants qu", function(){
            expect(pigLatin('queen')).to.equal('eenquay');
    });

    it("it adds 'ay' to the end of a word that starts with a y", function() {
        expect(pigLatin('yellow')).to.equal('ellowyay');
    });

    it("it adds 'ay' to the end of a word that starts with a y", function() {
        expect(pigLatin('none')).to.equal('onenay');
    });

});
