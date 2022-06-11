import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthForgotComponent } from './auth-forgot.component';

describe('Creasy_AuthForgotComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthForgotComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthForgotComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth-forgot'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthForgotComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth-forgot');
  });
});
