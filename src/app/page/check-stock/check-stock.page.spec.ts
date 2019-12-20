import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckStockPage } from './check-stock.page';

describe('CheckStockPage', () => {
  let component: CheckStockPage;
  let fixture: ComponentFixture<CheckStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
