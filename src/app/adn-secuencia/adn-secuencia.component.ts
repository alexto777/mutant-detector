import { Component } from '@angular/core';

@Component({
  selector: 'app-adn-secuencia',
  templateUrl: './adn-secuencia.component.html',
  styleUrls: ['./adn-secuencia.component.scss'],
})
export class AdnSecuenciaComponent {
  adn: string = '';

  detectMutant() {
    const isMutant = this.isMutant(this.adn.split('\n'));
    if (isMutant) {
      alert('El humano es mutante');
    } else {
      alert('El humano no es mutante');
    }
  }

  isMutant(adn: string[]): any {
    // Implementa aquí el algoritmo para detectar si el ADN es mutante
  }
}
