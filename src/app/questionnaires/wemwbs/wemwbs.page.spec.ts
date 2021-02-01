import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WemwbsPage } from './wemwbs.page';

describe('WemwbsPage', () => {
  let component: WemwbsPage;
  let fixture: ComponentFixture<WemwbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WemwbsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WemwbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
