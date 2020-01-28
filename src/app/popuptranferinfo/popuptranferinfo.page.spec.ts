import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopuptranferinfoPage } from './popuptranferinfo.page';

describe('PopuptranferinfoPage', () => {
  let component: PopuptranferinfoPage;
  let fixture: ComponentFixture<PopuptranferinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuptranferinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopuptranferinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
