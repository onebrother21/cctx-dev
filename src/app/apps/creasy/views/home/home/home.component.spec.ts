import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_HomeComponent } from './home.component';

describe('Creasy_HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_HomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_HomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-home'`, () => {
    const fixture = TestBed.createComponent(Creasy_HomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-home');
  });
});
