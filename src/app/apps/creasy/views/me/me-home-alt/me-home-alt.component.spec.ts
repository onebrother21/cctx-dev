import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserHomeAltComponent } from './me-home-alt.component';

describe('Creasy_UserHomeAltComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserHomeAltComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeAltComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-alt'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeAltComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-alt');
  });
});
