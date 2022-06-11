import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserHomeComponent } from './qs-user-home.component';

describe('Creasy_UserHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserHomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home');
  });
});
