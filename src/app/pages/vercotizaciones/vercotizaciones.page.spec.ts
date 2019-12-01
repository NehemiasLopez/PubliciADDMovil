import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VercotizacionesPage } from './vercotizaciones.page';

describe('VercotizacionesPage', () => {
  let component: VercotizacionesPage;
  let fixture: ComponentFixture<VercotizacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercotizacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VercotizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
