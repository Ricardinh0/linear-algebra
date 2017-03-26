import {add} from './vector';
import {subtract} from './vector';
import {dot} from './vector';
import {theta} from './vector';
import {normalisation} from './vector';

console.log(
  add([3,3],[1,1]),
  subtract([3,3],[1,1]),
  dot([1,2,-1],[3,1,0]),
  dot([1,2,-1],[1,2,-1]), 
  theta([1,2,-1],[3,1,0]),
  normalisation([1.996,3.108,-4.554])
);