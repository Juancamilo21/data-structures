import { Queue } from "./queue";

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
//queue.enqueue(6);
//queue.enqueue(7);

console.log(`Datos de la cola: ${queue.showQueue()}`);
console.log(`Tamaño de la cola: ${queue.FinalQueue + 1}`);
console.log("--------------------------------------");
console.log(`Eminando el frente: [${queue.dequeue()}]`);
console.log("--------------------------------------");
console.log(`Datos de la cola: ${queue.showQueue()}`);
console.log(`Tamaño de la cola: ${queue.FinalQueue + 1}`);
