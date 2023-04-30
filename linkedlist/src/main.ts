import { List } from "./list";

const list = new List();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
console.log(`Datos de la lista: ${list.showValues()}`);
list.addNodeToHead(7);
console.log(`Agregando el 7 en la cabeza: ${list.showValues()}`);
list.addBetweenNodes(6, 3);
console.log(`Agregando el 6 despues del 3: ${list.showValues()}`);
list.removeNode(3)
console.log(`Eliminando el 3: ${list.showValues()}`);
