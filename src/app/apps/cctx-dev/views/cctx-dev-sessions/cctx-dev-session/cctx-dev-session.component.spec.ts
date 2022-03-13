import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSessionComponent } from './cctx-dev-session.component';

describe('CCTXDevSessionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSessionComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSessionComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-session'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSessionComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-session');
  });
});
