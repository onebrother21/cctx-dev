import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserHomeIconTrayTwoComponent } from './user-home-notifications.component';

describe('Creasy_UserHomeIconTrayTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserHomeIconTrayTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeIconTrayTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-icon-tray-2'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeIconTrayTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-icon-tray-2');
  });
});
