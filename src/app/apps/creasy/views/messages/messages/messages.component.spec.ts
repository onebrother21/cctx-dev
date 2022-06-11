import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_SessionComponent } from './messages.component';

describe('Creasy_SessionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_SessionComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_SessionComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session'`, () => {
    const fixture = TestBed.createComponent(Creasy_SessionComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session');
  });
});
