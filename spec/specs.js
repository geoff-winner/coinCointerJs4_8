describe('queenAttack', function() {
    it("is false if the coordianted are not horizontally, vertically, diagonally in line with each other", function() {
        expect(queenAttack([1,1], [2,3])).to.equal(false);
    });
});

describe('queenAttack', function() {
    it("is true if the coordinates are horizontally or vertically in line with eachother", function() {
        expect(queenAttack([1,2], [3,2])).to.equal(true);
    });
});

describe('queenAttack', function() {
    it("is true if the coordinates are diagonally in line with eachother", function() {
        expect(queenAttack([3,8], [5,6])).to.equal(true);
    });
});

describe('queenAttack', function() {
    it("is true if the coordinates are diagonally in line with eachother", function() {
        expect(queenAttack([1,3], [6,8])).to.equal(true);
    });
});

describe('queenAttack', function() {
    it("is false if the coordinates are not in line in any fashion", function() {
        expect(queenAttack([1,1], [4,2])).to.equal(false);
    });
});
