export class Queue {
  private queue: number[];
  private finalQueue: number; // Indice que incrementa a medida que se añaden valores a la cola
  private readonly maximum = 5;

  constructor() {
    this.queue = [];
    this.finalQueue = -1; // Se inicializa en -1 para representar una cola vacía
  }

  public get FinalQueue() {
    return this.finalQueue;
  }

  /**
   *
   * @returns retorna true si la cola está vacía (finalQueue es igual a -1), de lo contrario devuelve false
   */
  public isEmpty() {
    return this.finalQueue === -1;
  }

  /**
   *
   * @returns retorna true si la cola está llena (finalQueue es igual a maximum - 1), de lo contrario devuelve false
   */
  public isFull() {
    return this.finalQueue === this.maximum - 1;
  }

  /**
   * Agrega valores a la cola
   * @param value valor especificado que se agrega a la cola.
   * @returns rompe el flujo del metodo si la cola esta llena.
   */
  public enqueue(value: number) {
    if (this.isFull()) return;
    this.finalQueue++;
    this.queue[this.finalQueue] = value;
  }

  /**
   * Este método privado se utiliza para desplazar los elementos de la cola después de que se ha eliminado un elemento.
   */
  private displace() {
    let index = 0;
    while (index < this.finalQueue) {
      this.queue[index] = this.queue[index + 1];
      index++;
    }
    this.finalQueue--;
  }

  /**
   * Elimina el primer elemento de la cola.
   * @returns retorna el valor eliminado. Si la cola está vacía retorna -1
   */
  public dequeue() {
    let value = -1;
    if (this.isEmpty()) return value;
    value = this.queue[0];
    this.displace();
    return value;
  }

  /**
   * Muestra los valores de la cola.
   * @returns retorna una cadena de texto que representa la cola actual. Si la cola está vacía devuelve "[]".
   */
  public showQueue() {
    let concat = "";
    if (this.isEmpty()) concat = "[]";
    for (let i = 0; i <= this.finalQueue; i++) {
      concat += `[${this.queue[i]}]`;
    }
    return concat;
  }
}
