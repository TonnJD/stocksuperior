import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangpasswordPage } from './changpassword.page';

describe('ChangpasswordPage', () => {
  let component: ChangpasswordPage;
  let fixture: ComponentFixture<ChangpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangpasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
