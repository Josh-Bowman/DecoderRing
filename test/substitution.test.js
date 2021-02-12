// Write your tests here!

const substitution = require("../src/substitution");
const expect = require("chai").expect;
//Write your tests here!
describe('substitution', () => {
    it(`It returns false if the given alphabet isn't exactly 26 characters long.`, () => {
        const actual = substitution('thinkful', 'asdf');
        expect(actual).to.eql(false);
    });
    it('It correctly translates the given phrase, based on the alphabet given to the function.', () => {
        expect(substitution('ykrrpik',`plmoknijbuhvygctfxrdzeswaq`, false)).to.eql('message');
    });
    it("It returns false if there are any duplicate characters in the given alphabet.", () => {
        const actual = substitution("thin kful", `ppmoknijbuhvygctfxrdzeswaq` );
        expect(actual).to.eql(false);
    });
    it('It maintains spaces in the message, before and after encoding or decoding.', () => {
        expect(substitution('hell o w orld',`plmoknijbuhvygctfxrdzeswaq`,true)).to.eql('jkvv c s cxvo');
        expect(substitution('jkvv c s cxvo',`plmoknijbuhvygctfxrdzeswaq`,false)).to.eql('hell o w orld');
    });
    it('It ignores capital letters. (For example, the results of A Message and a message should be the same.)', () => {
        expect(substitution('FerNaNdo',`plmoknijbuhvygctfxrdzeswaq`)).to.eql('nkxgpgoc');
        expect(substitution('FerN aNd o',`plmoknijbuhvygctfxrdzeswaq`)).to.eql('nkxg pgo c');
    });
});