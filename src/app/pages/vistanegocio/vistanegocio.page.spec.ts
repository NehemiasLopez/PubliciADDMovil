import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistanegocioPage } from './vistanegocio.page';

describe('VistanegocioPage', () => {
  let component: VistanegocioPage;
  let fixture: ComponentFixture<VistanegocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistanegocioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistanegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
