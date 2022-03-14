import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSessionRoomComponent } from './cctx-dev-session-room.component';

describe('CCTXDevSessionRoomComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSessionRoomComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSessionRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-session-room'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSessionRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-session-room');
  });
});
