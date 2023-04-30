import { Array } from "./array";

const array = new Array();

array.add(0, 1);
array.add(1, 2);
array.add(2, 3);
array.add(3, 4);
array.add(4, 5);
array.add(5, 6);
array.add(6, 7);
array.add(7, 8);
array.add(8, 9);
array.add(9, 10);

console.log(`Datos del array: ${array.showArray()}`);
const { sum, average } = array.sumAverageArray();
console.log(`Suma: ${sum}\nPromedio: ${average}`);
