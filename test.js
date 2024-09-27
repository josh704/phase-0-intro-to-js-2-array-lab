const { expect } = require('chai');
const { beforeEach } = require('mocha');
const {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat
} = require('./index.js');
describe('cats array manipulations', function () {
    beforeEach(function () {
        cats.length = 0;
        cats.push("Milo", "Otis", "Garfield");
    });
    it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat("Ralph");
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
    });
    it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");
        expect(cats).to.have.ordered.members(["Bob","Milo", "Otis", "Garfield"]);
    });
    it('removes the last cat from the array', function () {
        destructivelyRemoveLastCat();
        expect(cats).to.have.ordered.members(["Milo", "Otis"]);
    });
    it('removes the first cat from the array', function () {
        destructivelyRemoveFirstCat();
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]);
    });
});
