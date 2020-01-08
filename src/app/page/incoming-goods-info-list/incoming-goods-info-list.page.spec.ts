import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomingGoodsInfoListPage } from './incoming-goods-info-list.page';

describe('IncomingGoodsInfoListPage', () => {
  let component: IncomingGoodsInfoListPage;
  let fixture: ComponentFixture<IncomingGoodsInfoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingGoodsInfoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomingGoodsInfoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
