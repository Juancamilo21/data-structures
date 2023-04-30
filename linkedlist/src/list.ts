import { Node } from "./node";

export class List {
  head: Node;

  constructor() {
    // @ts-ignore
    this.head = null;
  }

  /**
   * Verifica si la lista está o no vacía.
   * @returns retorna true si la lista está vacía, es decir, si la cabeza de la lista es null. De lo contrario, devuelve false.
   */
  public isEmpty() {
    return this.head === null;
  }

  /**
   * Recorre la lista hasta que llegue al ultimo nodo, el ultimo nodo es aquel donde su enlace siguiente es null.
   * @returns retorna el último elemento de la lista.
   */
  public last() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  /**
   * Agrega un nueno nodo al final de la lista.
   * @param newValue valor especificado que se agrega al final de la lista.
   */
  public addNode(newValue: number) {
    const newNode = new Node(newValue);
    if (this.isEmpty()) this.head = newNode;
    else this.last().next = newNode;
  }

  /**
   * Agrega un nueno nodo al inicio (cabeza) de la lista.
   * @param newValue valor especificado que se agrega a la cabeza de la lista.
   */
  public addNodeToHead(newValue: number) {
    const newNode = new Node(newValue);
    if (!this.isEmpty()) {
      let node = this.head;
      newNode.next = node;
    }
    this.head = newNode;
  }

  /**
   * Agrega un nuevo nodo despues de un nodo que se toma por referencia.
   * @param newValue valor especificado que se agrega despues de un nodo.
   * @param value valor del nodo que se tiene por referencia.
   * @returns rompe el flujo del metodo cuando el nodo por referencia no existe en la lista o es null.
   */
  public addBetweenNodes(newValue: number, value: number) {
    const newNode = new Node(newValue);
    const { node } = this.findNode(value);
    const last = this.last();
    if (!node) return;
    if (node === last) {
      last.next = newNode;
      return;
    }
    newNode.next = node.next;
    node.next = newNode;
  }

  /**
   * Busca un nodo dado su valor especifico.
   * @param value valor del nodo el cual se desea buscar.
   * @returns retorna un onjeto con dos propiedades: 'node' es el nodo encontrado o null si no existe, y 'found' un valor booleano que indica si se encontro o no el nodo.
   */
  public findNode(value: number) {
    let current = this.head;
    let found = false;
    while (current && !found) {
      found = current.value === value;
      if (!found) current = current.next;
    }
    return { node: current, found };
  }

  /**
   * Busca el nodo anterior a un nodo especificado.
   * @param node valor del nodo especificado.
   * @returns retorna el nodo anterior al nodo especificado.
   */
  private previous(node: Node) {
    let current = this.head;
    while (current.next !== node) {
      current = current.next;
    }
    return current;
  }

  /**
   * Elimina un nodo de la lista dado su valor.
   * @param value valor del nodo que se quiere eliminar de la lista.
   * @returns rompe el flujo del metodo cuando el valor del nodo es null.
   */
  public removeNode(value: number) {
    const { node } = this.findNode(value);
    if (!node) return;
    if (node === this.head) {
      this.head = this.head.next;
    } else {
      let previous = this.previous(node);
      previous.next = node.next;
    }
  }

  /**
   * Muestra la lista con sus valores entre corchetes y separanos por una flecha
   * @returns retorna una cadena con los valores de la lista
   */
  public showValues() {
    let current = this.head;
    let concat = "";
    while (current) {
      concat += `[${current.value}]`;
      current = current.next;
      if (current) concat += " -> ";
    }
    return concat;
  }
}
