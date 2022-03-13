import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSessionListComponent } from './cctx-dev-session-list.component';

describe('CCTXDevSessionListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSessionListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSessionListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-session-list'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSessionListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-session-list');
  });
});
