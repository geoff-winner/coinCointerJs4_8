describe('coinCounter', function(){

    it("it counts a penny", function(){
        expect(coinCounter(1)).to.equal(1);
    });

    it("it counts a nickel and a penny", function(){
        expect(coinCounter(6)).to.equal(1,1);
    });
    it("it counts a dime a nickel and a penny", function(){
        expect(coinCounter(16)).to.equal(1,1,1,0);
    });
    it("it counts a quarter a dime a nickel and a penny", function(){
        expect(coinCounter(36)).to.equal(1,0,1,1);
    });

    it("it counts a quarter, two dimes, 0 nickels, and one penny", function() {
        expect(coinCounter(46)).to.equal(1,2,0,1);
    });


});
