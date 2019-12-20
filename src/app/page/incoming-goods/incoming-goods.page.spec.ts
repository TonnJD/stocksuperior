import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomingGoodsPage } from './incoming-goods.page';

describe('IncomingGoodsPage', () => {
  let component: IncomingGoodsPage;
  let fixture: ComponentFixture<IncomingGoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingGoodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomingGoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
