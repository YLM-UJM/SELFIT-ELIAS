import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sf12Page } from './sf12.page';

describe('Sf12Page', () => {
  let component: Sf12Page;
  let fixture: ComponentFixture<Sf12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sf12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
