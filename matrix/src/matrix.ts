export class Matrix {
  private matrix: number[][];
  public rows: number;
  public columns: number;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = [];
  }

  /**
   * Genera una matriz (rows x columns) con valores aleatorios de 0 a 10
   */
  public generateMatrix() {
    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }

  /**
   * Imprime la diagonal principal, es decir, aquellos valores que se enuentran en la misma posicion entre filas y columnas
   * @returns retorna una cadena con los valores de la diagonal principal
   */
  public mainDiagonal() {
    let concat = "";
    if (this.rows !== this.columns) return "La matriz no es cuadrada";
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (i === j) concat += `[${this.matrix[i][j]}]`;
        else concat += "  ";
      }
      concat += "\n";
    }
    return concat;
  }

  /**
   * Imprime la diagonal secundaria, es decir, si la suma de la posicion en filas y columnas es igual al tamaño de filas de la matriz menos uno
   * @returns retorna una cadena con los valores de la diagonal secundaria
   */
  public secondaryDiagonal() {
    let concat = "";
    if (this.rows !== this.columns) return "La matriz no es cuadrada";
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (i + j === this.matrix.length - 1)
          concat += `[${this.matrix[i][j]}]`;
        else concat += "  ";
      }
      concat += "\n";
    }
    return concat;
  }

  /**
   * Calcula la suma de todos los valores de la matriz
   * @returns retorna la suma de los valores de la matriz
   */
  public sumMatrix() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        sum += this.matrix[i][j];
      }
    }
    return sum;
  }

  /**
   * Imprime la matriz en una representación en texto
   * @returns retorna una cadena con los valores de la matriz
   */
  public showMatrix() {
    let concat = "";
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        concat += `[${this.matrix[i][j]}]`;
      }
      concat += "\n";
    }
    return concat;
  }
}
