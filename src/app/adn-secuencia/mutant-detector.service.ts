import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MutantDetectorService {
  /** Función devuelve si el ADN ingresado es mutante o no */
  isMutant(adn: string[]): boolean {
    const n = adn.length;
    const targetSequences = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];

    // Verificar filas
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 3; j++) {
        const sequence = adn[i].substring(j, j + 4);
        if (targetSequences.includes(sequence)) {
          return true;
        }
      }
    }

    // Verificar columnas
    for (let i = 0; i < n - 3; i++) {
      for (let j = 0; j < n; j++) {
        const sequence =
          adn[i][j] + adn[i + 1][j] + adn[i + 2][j] + adn[i + 3][j];
        if (targetSequences.includes(sequence)) {
          return true;
        }
      }
    }

    // Verificar diagonales
    for (let i = 0; i < n - 3; i++) {
      for (let j = 0; j < n - 3; j++) {
        const sequence =
          adn[i][j] + adn[i + 1][j + 1] + adn[i + 2][j + 2] + adn[i + 3][j + 3];
        if (targetSequences.includes(sequence)) {
          return true;
        }
      }
    }

    for (let i = 3; i < n; i++) {
      for (let j = 0; j < n - 3; j++) {
        const sequence =
          adn[i][j] + adn[i - 1][j + 1] + adn[i - 2][j + 2] + adn[i - 3][j + 3];
        if (targetSequences.includes(sequence)) {
          return true;
        }
      }
    }

    return false;
  }
}
