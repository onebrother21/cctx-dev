import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_ErrorComponent } from './error.component';

describe('Creasy_ErrorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_ErrorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_ErrorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-error'`, () => {
    const fixture = TestBed.createComponent(Creasy_ErrorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-error');
  });
});
