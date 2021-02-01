import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { APPage } from './ap.page';

describe('APPage', () => {
  let component: APPage;
  let fixture: ComponentFixture<APPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(APPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
