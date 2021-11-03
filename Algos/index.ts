import knightTour from './knight-tour';
import { combs, permute } from './permutation';
import { printPattern }  from './patterns';
import { decimalToBinary } from './maths';
import { antiClockRotation, rotateInPlaceClockwise, rotateInPlaceAntiClockwise } from './matrix';
// permute('vikas', 0, 'vikas'.length - 1);
// console.log(combs)
// knightTour(8);
// printPattern(4);
// console.log(decimalToBinary(67));
const matrix = new Array(4).fill(0).map(val => new Array(4).fill(0).map(val => Math.floor(Math.random() * 100)));
// antiClockRotation(matrix);
rotateInPlaceClockwise(matrix);
rotateInPlaceAntiClockwise(matrix);