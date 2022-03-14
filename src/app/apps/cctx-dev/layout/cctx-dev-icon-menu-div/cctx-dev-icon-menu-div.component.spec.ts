import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevIconMenuDivComponent } from './cctx-dev-icon-menu-div.component';

describe('CCTXDevIconMenuDivComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevIconMenuDivComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevIconMenuDivComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-icon-menu-div'`, () => {
    const fixture = TestBed.createComponent(CCTXDevIconMenuDivComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-icon-menu-div');
  });
});
