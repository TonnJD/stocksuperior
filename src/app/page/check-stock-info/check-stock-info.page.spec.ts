import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckStockInfoPage } from './check-stock-info.page';

describe('CheckStockInfoPage', () => {
  let component: CheckStockInfoPage;
  let fixture: ComponentFixture<CheckStockInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStockInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckStockInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
