// Write your tests here!

const caesar = require("../src/caesar");
const expect = require("chai").expect;

//testing to return false with invalid shift
const input = "Random String"
const shift = 0
describe('caesar', () => {
    it('Should return false if the shift value is equal to 0, less than -25, greater than 25, or not present', () => {
      expect(caesar('thinkful', 0)).to.be.false;
      expect(caesar('thinkful', -26)).to.be.false;
      expect(caesar('thinkful', 99)).to.be.false;
      expect(caesar('thinkful')).to.be.false;
    });
    it('Should ignore capital letters', () => {
      const actual = caesar('thinkful', 3);
      const expected = caesar('THINKFUL', 3);
      expect(actual).to.equal(expected);
    });
    //it
  });

  describe("caesar", () => {
    it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
      expect(caesar("thinkful", -26)).to.eql(false);
    });
    it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
      const actual = caesar('g h t $#%', 6, false);
      expect(actual).to.eql(`a b n $#%`);
    });
    it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
      const actual = caesar("thinkful", 3, false);
      const expected = caesar("THINKFUL", 3,false);
      expect(actual).to.eql(expected);
    });
    it(`When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)`, () => {
      const actual = caesar("xyz", 3);
      const expected = 'abc';
      expect(actual).to.eql(expected);
    });
  });