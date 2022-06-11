import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthUpdatePinComponent } from './auth-update-pin.component';

describe('Creasy_AuthUpdatePinComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthUpdatePinComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthUpdatePinComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-update-pin'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthUpdatePinComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-update-pin');
  });
});
