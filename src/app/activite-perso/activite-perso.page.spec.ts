import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitePersoPage } from './activite-perso.page';

describe('ActivitePersoPage', () => {
  let component: ActivitePersoPage;
  let fixture: ComponentFixture<ActivitePersoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitePersoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitePersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
