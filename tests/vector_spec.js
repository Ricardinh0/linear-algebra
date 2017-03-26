import {scalar, square, magnitude, normalisation, dot, theta} from '../app/assets/javascripts/vector';

describe('scalar', function() {
  it('returns a scaled vector by n', function() {
    expect(scalar(2, [1,2])).to. deep.equal([2,4]);
    expect(scalar(1, [1,2])).to. deep.equal([1,2]);
    expect(scalar(4, [3,2])).to. deep.equal([12,8]);
  });
});

describe('square', function() {
  it('returns the number squared', function() {
    expect(square(2)).to.equal(4);
    expect(square(1)).to.equal(1);
    expect(square(4)).to.equal(16);
  });
});

describe('magnitude', function() {
  it('returns the magnitude of a given vector', function() {
    expect(magnitude([])).to.equal(false);
    expect(magnitude([1,1])).to.equal(1.4142135623730951);
    expect(magnitude([1,2])).to.equal(2.23606797749979);
  });
});

describe('normalise', function() {
  it('returns the normalised vector', function() {
    expect(normalisation([])).to.deep.equal(false);
    expect(normalisation([1.996,3.108,-4.554])).to.deep.equal([0.3404012959433014, 0.5300437012984873, -0.7766470449528029]);
  });
});

describe('dot', function() {
  it('returns the dot product of the given vectors', function() {
    expect(dot([])).to.equal(false);
    expect(dot([1,2,-1],[3,1,0])).to.equal(5);
    expect(dot([1,2,-1],[1,2,-1])).to.equal(6);
  });
});

describe('theta', function() {
  it('returns radian angle of the given vectors', function() {
    expect(theta([])).to.equal(false);
    expect(theta([1,2,-1],[3,1,0])).to.equal(0.8691222030072928);
    expect(theta([1,2,-1],[1,2,-1])).to.equal(false);
  });
});