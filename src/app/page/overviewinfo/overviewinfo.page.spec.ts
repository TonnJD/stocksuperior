import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewinfoPage } from './overviewinfo.page';

describe('OverviewinfoPage', () => {
  let component: OverviewinfoPage;
  let fixture: ComponentFixture<OverviewinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
