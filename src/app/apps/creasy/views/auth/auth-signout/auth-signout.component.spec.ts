import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthSignOutComponent } from './auth-signout.component';

describe('Creasy_AuthSignOutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthSignOutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthSignOutComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth-signout'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthSignOutComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth-signout');
  });
});
