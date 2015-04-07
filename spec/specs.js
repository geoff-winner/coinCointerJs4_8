describe('titleCase', function(){

    it("it converts a letter into a capitalize", function(){
        expect(titleCase('a')).to.equal('A');
    });

    it("it converts a word into title case", function(){
        expect(titleCase('apple')).to.equal('Apple');
    });

    it("it converts a two-word string into title case", function(){
        expect(titleCase('an apple tree')).to.equal('An Apple Tree');
    });

    it("it takes odd uppercase placement and puts it into title case", function() {
        expect(titleCase('aNnA')).to.equal('Anna');
    });

    it("it takes odd uppercase placement in multiple words and puts them in title case", function() {
        expect(titleCase('aNnA Is the qUEEn')).to.equal('Anna Is The Queen');
    });
});
