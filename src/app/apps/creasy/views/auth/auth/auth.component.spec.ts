import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_AuthComponent } from './auth.component';

describe('Creasy_AuthComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_AuthComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_AuthComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-auth'`, () => {
    const fixture = TestBed.createComponent(Creasy_AuthComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-auth');
  });
});
