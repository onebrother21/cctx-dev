import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSessionsComponent } from './cctx-dev-sessions.component';

describe('CCTXDevSessionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSessionsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSessionsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-sessions'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSessionsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-sessions');
  });
});
