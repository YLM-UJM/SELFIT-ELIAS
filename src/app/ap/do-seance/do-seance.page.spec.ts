import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoSeancePage } from './do-seance.page';

describe('DoSeancePage', () => {
  let component: DoSeancePage;
  let fixture: ComponentFixture<DoSeancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoSeancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoSeancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
