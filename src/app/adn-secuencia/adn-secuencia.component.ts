import { Component } from '@angular/core';
import { MutantDetectorService } from './mutant-detector.service';

@Component({
  selector: 'app-adn-secuencia',
  templateUrl: './adn-secuencia.component.html',
  styleUrls: ['./adn-secuencia.component.scss'],
})
export class AdnSecuenciaComponent {
  constructor(private mutantDetector: MutantDetectorService) {}

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
    return true;
  }
}
