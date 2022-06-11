import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthSignUpComponent } from './auth-signup.component';

describe('Creasy_AuthSignUpComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthSignUpComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthSignUpComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth-signup'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthSignUpComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth-signup');
  });
});
