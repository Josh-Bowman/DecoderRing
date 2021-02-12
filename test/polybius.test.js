// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe('polybius', () => {
    it('should encode a message by translating each letter to number pairs', () => {
        expect(polybius('Fernando')).to.eql("1251243311334143");
    });
    it('It ignores capital letters. (For example, the results of A Message and a message should be the same.)', () => {
        const actual = polybius('A Message');
        const expected = polybius('a message');
        expect(actual).to.eql(expected);
    });
    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        const actual = polybius("thin kful", 3);
        const expected = polybius("THIN KFUL", 3);
        expect(actual).to.eql(expected);
      });
    it('When encoding, it translates the letters i and j to 42.', () => {
        expect(polybius('i')).to.eql('42');
        expect(polybius('j')).to.eql('42');
    });
    it('When decoding, it translates 42 to (i/j)', () => {
        expect(polybius('42', false)).to.eql('(i/j)');
        expect(polybius('42 42', false)).to.eql('(i/j) (i/j)');
    });
});