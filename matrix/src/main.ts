import { Matrix } from "./matrix";

const matrix = new Matrix(3, 3);

matrix.generateMatrix();
console.log(`Matrix:\n${matrix.showMatrix()}`);
console.log(`Diagonal principal:\n${matrix.mainDiagonal()}`);
console.log(`Diagonal secundaria:\n${matrix.secondaryDiagonal()}`);
console.log(`Suma de la matriz: ${matrix.sumMatrix()}`);
