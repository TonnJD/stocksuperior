import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetLocationInfoPage } from './asset-location-info.page';

describe('AssetLocationInfoPage', () => {
  let component: AssetLocationInfoPage;
  let fixture: ComponentFixture<AssetLocationInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetLocationInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetLocationInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
