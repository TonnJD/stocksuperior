import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomingGoodsInfoPage } from './incoming-goods-info.page';

describe('IncomingGoodsInfoPage', () => {
  let component: IncomingGoodsInfoPage;
  let fixture: ComponentFixture<IncomingGoodsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingGoodsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomingGoodsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
