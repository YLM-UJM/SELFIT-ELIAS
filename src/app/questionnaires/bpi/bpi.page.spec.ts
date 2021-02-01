import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BpiPage } from './bpi.page';

describe('BpiPage', () => {
  let component: BpiPage;
  let fixture: ComponentFixture<BpiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BpiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
