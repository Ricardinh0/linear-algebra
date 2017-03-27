import {add, subtract, scalar, square, magnitude, normalisation, dot, theta} from '../../app/assets/javascripts/vector';

describe('vector', function() {

  it('returns a vector which is the sum of the 2 supplied', function() {
    expect(add([1,1], [1,2])).to.deep.equal([2,3]);
    expect(add([10,13], [1,2])).to.deep.equal([11,15]);
  });

  it('returns a vector which is the subtracted sum of the 2 supplied', function() {
    expect(subtract([1,1], [1,2])).to.deep.equal([0,-1]);
    expect(subtract([10,13], [1,2])).to.deep.equal([9,11]);
  });
  
  it('returns a scaled vector by n', function() {
    expect(scalar(2, [1,2])).to.deep.equal([2,4]);
    expect(scalar(1, [1,2])).to.deep.equal([1,2]);
    expect(scalar(4, [3,2])).to.deep.equal([12,8]);
  });

  it('returns the number squared', function() {
    expect(square(2)).to.equal(4);
    expect(square(1)).to.equal(1);
    expect(square(4)).to.equal(16);
  });

  it('returns the magnitude of a given vector', function() {
    expect(magnitude([])).to.equal(false);
    expect(magnitude([1,1])).to.equal(1.4142135623730951);
    expect(magnitude([1,2])).to.equal(2.23606797749979);
  });

  it('returns the normalised vector', function() {
    expect(normalisation([])).to.deep.equal(false);
    expect(normalisation([1.996,3.108,-4.554])).to.deep.equal([0.3404012959433014, 0.5300437012984873, -0.7766470449528029]);
  });

  it('returns the dot product of the given vectors', function() {
    expect(dot([])).to.equal(false);
    expect(dot([1,2,-1],[3,1,0])).to.equal(5);
    expect(dot([1,2,-1],[1,2,-1])).to.equal(6);
  });

  it('returns radian angle of the given vectors', function() {
    expect(theta([])).to.equal(false);
    expect(theta([1,2,-1],[3,1,0])).to.equal(0.8691222030072928);
    expect(theta([1,2,-1],[1,2,-1])).to.equal(false);
  });
});