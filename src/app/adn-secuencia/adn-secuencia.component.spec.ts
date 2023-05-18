import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnSecuenciaComponent } from './adn-secuencia.component';

describe('AdnSecuenciaComponent', () => {
  let component: AdnSecuenciaComponent;
  let fixture: ComponentFixture<AdnSecuenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdnSecuenciaComponent]
    });
    fixture = TestBed.createComponent(AdnSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
