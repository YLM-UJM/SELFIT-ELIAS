import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesSeancesSavedPage } from './mes-seances-saved.page';

describe('MesSeancesSavedPage', () => {
  let component: MesSeancesSavedPage;
  let fixture: ComponentFixture<MesSeancesSavedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesSeancesSavedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesSeancesSavedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
