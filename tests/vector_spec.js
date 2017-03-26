import { square, normalisation } from '../app/assets/javascripts/vector';

describe('square', function() {
  it('returns the number squared', function() {
    expect(square(2)).to.equal(4);
  });
  it('returns the number squared', function() {
    expect(square(1)).to.equal(1);
  });
  it('returns the number squared', function() {
    expect(square(4)).to.equal(16);
  });
});

describe('normalise', function() {
  it('returns the normalised vector', function() {
    expect(normalisation([1.996,3.108,-4.554])).to.deep.equal([0.3404012959433014, 0.5300437012984873, -0.7766470449528029]);
  });
});