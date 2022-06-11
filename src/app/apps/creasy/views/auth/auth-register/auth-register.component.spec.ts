import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthRegisterComponent } from './auth-register.component';

describe('Creasy_AuthRegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthRegisterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth-register'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth-register');
  });
});
