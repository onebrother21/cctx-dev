import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserMessagesComponent } from './me-msgs.component';

describe('Creasy_UserMessagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserMessagesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-user-msgs'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserMessagesComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-user-msgs');
  });
});
