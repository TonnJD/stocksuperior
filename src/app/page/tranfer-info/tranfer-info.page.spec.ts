import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranferInfoPage } from './tranfer-info.page';

describe('TranferInfoPage', () => {
  let component: TranferInfoPage;
  let fixture: ComponentFixture<TranferInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranferInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
