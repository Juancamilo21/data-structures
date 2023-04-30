import { Stack } from "./stack";

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
//stack.push(6);
//stack.push(7);

console.log(stack.showStack());
console.log(`Tamaño de la pila: ${stack.Top + 1}`);
console.log(`Tope de la pila, (metodo: peeK()): [${stack.peek()}]`);
console.log("--------------------------------------");
console.log(`Elimando el tope, (metodo: pop()): [${stack.pop()}]`);
console.log("--------------------------------------");
console.log(stack.showStack());
console.log(`Tamaño de la pila: ${stack.Top + 1}`);
console.log(`Tope de la pila, (metodo: peeK()): [${stack.peek()}]`);