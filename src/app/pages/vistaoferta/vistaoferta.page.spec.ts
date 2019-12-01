import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaofertaPage } from './vistaoferta.page';

describe('VistaofertaPage', () => {
  let component: VistaofertaPage;
  let fixture: ComponentFixture<VistaofertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaofertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaofertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
