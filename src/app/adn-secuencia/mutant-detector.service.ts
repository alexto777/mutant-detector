import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MutantDetectorService {
  isMutant(dna: string[]): any {
    // Implementa aquí el algoritmo para detectar si el ADN es mutante
  }

  constructor() {}
}
