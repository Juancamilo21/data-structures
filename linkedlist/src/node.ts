export class Node {
  value: number; // tomará los valores que se alamacenarán en la lista
  next: Node; // Enlace de los nodos

  constructor(value: number) {
    this.value = value;
    // @ts-ignore
    this.next = null;
  }
}
