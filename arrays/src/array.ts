export class Array {
  private arrayNumbers: number[];
  private readonly maximum = 10;

  constructor() {
    this.arrayNumbers = [];
  }

  public size() {
    return this.arrayNumbers.length;
  }

  public isEmpty() {
    return this.size() === 0;
  }

  /**
   * Agrega valores al arreglo.
   * @param index indice del arreglo.
   * @param value valor que se ingresa en el indice indicado.
   */
  public add(index: number, value: number) {
    if (index >= this.maximum) return;
    this.arrayNumbers[index] = value;
  }

  /**
   * Calcula la suma y el promedio de los valores del arreglo.
   * @returns retorna un objeto con la suma y el promedio.
   */
  public sumAverageArray() {
    let sum = 0;
    for (let i = 0; i < this.size(); i++) {
      sum += this.arrayNumbers[i];
    }
    let average = this.size() > 0 ? sum / this.size() : 0;
    return { sum, average };
  }

  /**
   * Imprime el arreglo.
   * @returns retorna una cadena con los valores del arreglo.
   */
  public showArray() {
    if (this.isEmpty()) return "[]";
    let concat = "";
    for (let i = 0; i < this.size(); i++) {
      concat += `[${this.arrayNumbers[i]}]`;
    }
    return concat;
  }
}
