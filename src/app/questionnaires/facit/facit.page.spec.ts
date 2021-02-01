import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacitPage } from './facit.page';

describe('FacitPage', () => {
  let component: FacitPage;
  let fixture: ComponentFixture<FacitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
