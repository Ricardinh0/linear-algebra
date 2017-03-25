const addArray = (vecA, vecB) => {
  var arr = [];
  var i = 0;
  if ( vecA.length && vecB.length && vecA.length === vecB.length ) {
    for ( i; i < vecA.length; i++ ) {
      arr.push( vecA[i] + vecB[i] );
    }
  }
  return arr;
}

const subArray = (vecA, vecB) => {
  var arr = [];
  var i = 0;
  if ( vecA.length && vecB.length && vecA.length === vecB.length ) {
    for ( i; i < vecA.length; i++ ) {
      arr.push( vecA[i] - vecB[i] );
    }
  }
  return arr;
}

const scalar = (n = 0, v = [], i = 0) => {
  if (!v.length) return false;
  v[i] = n * v[i];
  if (i !== v.length-1) {
    return scalar(n, v, i+1);
  } else {
    return v;
  }
};

const square = (n) => {
  return n * n;
};

const magnitude = (v = [], i = 0, n = 0) => {
  if (!v.length) return false;
  n += square(v[i]);
  if (i !== v.length-1) {
    return magnitude(v, i+1, n);
  } else {
    return Math.sqrt(n);
  }
};

const normalisation = (v = []) => {
  if (!v.length) return false;
  v = scalar(1/magnitude(v), v);
  return v;
};

const dot = (a = [], b = [], i = 0, d = 0) => {
  if (!a.length || !b.length || a.length !== b.length) return false;
  d += a[i]*b[i];
  if (i !== a.length-1) {
    return dot(a, b, i+1, d);
  } else {
    return d;
  }
};

const theta = (a = [], b = []) => {
  if (!a.length || !b.length || a.length !== b.length) return false;
  //  Returns radians
  let r = Math.acos(dot(a,b) / (magnitude(a) * magnitude(b)));
  return isNaN(r) ? false : r;
};

export {
  scalar,
  magnitude,
  normalisation,
  dot,
  theta
};
