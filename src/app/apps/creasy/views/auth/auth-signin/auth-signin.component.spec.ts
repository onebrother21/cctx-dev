import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthSignInComponent } from './auth-signin.component';

describe('Creasy_AuthSignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthSignInComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth-signin'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth-signin');
  });
});
