export class Stack {
  private stack: number[];
  private top: number;
  private readonly maximum: number = 5;

  constructor() {
    this.stack = [];
    this.top = -1;
  }

  public get Top() {
    return this.top;
  }

  /**
   * Comprueba si la pila esta vacía
   * @returns retorna true si la pila está vacía, es decir, si el tope es -1
   */
  public isEmpty() {
    return this.top === -1;
  }

  /**
   * Comprueba si la pila está llena
   * @returns retorna true si la pila está llena, es decir, si el tope es igual al máximo menos 1
   */
  public isFull() {
    return this.top === this.maximum - 1;
  }

  /**
   * Agrega valores a la pila.
   * @param value valor esoecifico que se agrega a la pila.
   * @returns rompe el flujo del metodo si la pila está llena.
   */
  public push(value: number) {
    if (this.isFull()) return;
    this.top++;
    this.stack[this.top] = value;
  }

  /**
   * Elimina el valor que está en el tope de la pila.
   * @returns retorna el valor del tope eliminado. Si la pila está vacía retorna -1.
   */
  public pop() {
    let value = -1;
    if (this.isEmpty()) return value;
    value = this.stack[this.top];
    this.top--;
    return value;
  }

  /**
   *
   * @returns retorna el valor del tope. Si la pila está vacía retorna -1.
   */
  public peek() {
    let value = -1;
    if (this.isEmpty()) return value;
    value = this.stack[this.top];
    return value;
  }

  /**
   * Muestra los valores de la pila.
   * @returns retorna una cadena que representa la pila, en orden desde el tope hasta la base. Si la pila está vacía retorna "[]".
   */
  public showStack() {
    if (this.isEmpty()) return "[]";
    let concat = "";
    for (let i = this.top; ; i--) {
      concat += `[${this.stack[i]}]`;
      if (i === 0) return concat;
      concat += "\n";
    }
  }
}
