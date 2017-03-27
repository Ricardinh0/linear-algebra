/**
 * Add vectors
 *
 * @param      {Array}            vA      Vector A
 * @param      {Array}            vB      Vector B
 * @return     {Array}            A vector that is the sum of vA and vB
 */
const add = (vA = [], vB = [], v = [], i = 0) => {
  if (!vA.length && !vB.length && vA.length !== vB.length) return false;
  for (i; i < vA.length; i++) {
    v = [...v, vA[i] + vB[i]];
  }
  return v;
};
/**
 * Subtract vectors
 *
 * @param      {Array}            vA      Vector A
 * @param      {Array}            vB      Vector B
 * @return     {Array}                    A vector that is the subtracted sum of vA and vB
 */
const subtract = (vA, vB, v = [], i = 0) => {
  if (!vA.length && !vB.length && vA.length !== vB.length) return false;
  for (i; i < vA.length; i++) {
    v = [...v, vA[i] - vB[i]];
  }
  return v;
};
/**
 * Scale vector
 *
 * @param      {Number}            n       The number to scale a vector by
 * @param      {Array}             v       The vector to be scaled
 * @return     {Array}                     The scaled vector
 */
const scalar = (n = 0, v = [], i = 0) => {
  if (!v.length) return false;
  v[i] = n * v[i];
  if (i !== v.length-1) {
    return scalar(n, v, i+1);
  } 
  else {
    return v;
  }
};
/**
 * Square a number
 *
 * @param      {Number}  n       The integer to be square
 * @return     {Number}          The squared integer
 */
const square = (n) => {
  return n * n;
};
/**
 * Get the magnitude of a vector
 *
 * @param      {Array}              v       The vector to measure
 * @return     {Number}                     The magnitude
 */
const magnitude = (v = [], i = 0, n = 0) => {
  if (!v.length) return false;
  n += square(v[i]);
  if (i !== v.length-1) {
    return magnitude(v, i+1, n);
  }
  else {
    return Math.sqrt(n);
  }
};
/**
 * Normalise a vector
 *
 * @param      {Array}            v       The vector to be normalised
 * @return     {Array}                    The normalised vector
 */
const normalisation = (v = []) => {
  if (!v.length) return false;
  v = scalar(1/magnitude(v), v);
  return v;
};
/**
 * Get the dot product of tow vectors
 *
 * @param      {Array}             vA      Vector A
 * @param      {Array}             vB      Vector B
 * @return     {Number}                    The dot product
 */
const dot = (vA = [], vB = [], i = 0, d = 0) => {
  if (!vA.length || !vB.length || vA.length !== vB.length) return false;
  d += vA[i]*vB[i];
  if (i !== vA.length-1) {
    return dot(vA, vB, i+1, d);
  }
  else {
    return d;
  }
};
/**
 * Get the theta of to vectors
 *
 * @param      {Array}    vA       Vector A
 * @param      {Array}    vB       Vector B
 * @return     {Number}            Theta in radians, else, false if vA and vB are identical
 */
const theta = (vA = [], vB = []) => {
  if (!vA.length || !vB.length || vA.length !== vB.length) return false;
  const r = Math.acos(dot(vA,vB) / (magnitude(vA) * magnitude(vB)));
  return isNaN(r) ? false : r;
};
/**
 * Export
 */
export {
  add,
  subtract,
  scalar,
  magnitude,
  normalisation,
  dot,
  theta,
  square
};
