import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_SessionListComponent } from './message-list.component';

describe('Creasy_SessionListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_SessionListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_SessionListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session-list'`, () => {
    const fixture = TestBed.createComponent(Creasy_SessionListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session-list');
  });
});
