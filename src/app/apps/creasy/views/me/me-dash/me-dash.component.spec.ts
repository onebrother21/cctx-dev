import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserDashComponent } from './me-dash.component';

describe('Creasy_UserDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-user-dash'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-user-dash');
  });
});
