import {dot} from './vector';
import {theta} from './vector';
import {normalisation} from './vector';

console.log(
  dot([1,2,-1],[3,1,0]), 
  theta([1,2,-1],[3,1,0]),
  normalisation([1.996,3.108,-4.554])
);