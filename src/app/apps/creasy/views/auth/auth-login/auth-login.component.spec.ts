import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthLoginComponent } from './auth-login.component';

describe('Creasy_AuthLoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthLoginComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthLoginComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth-login'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthLoginComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth-login');
  });
});
