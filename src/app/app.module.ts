import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdnSecuenciaComponent } from './adn-secuencia/adn-secuencia.component';
import { FormsModule } from '@angular/forms';
import { MutantDetectorService } from './adn-secuencia/mutant-detector.service';

@NgModule({
  declarations: [AppComponent, AdnSecuenciaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MutantDetectorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
