import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserHomeIconTrayOneComponent } from './me-notifications.component-alt';

describe('Creasy_UserHomeIconTrayOneComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserHomeIconTrayOneComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeIconTrayOneComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'user-notifications'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeIconTrayOneComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('user-notifications');
  });
});
