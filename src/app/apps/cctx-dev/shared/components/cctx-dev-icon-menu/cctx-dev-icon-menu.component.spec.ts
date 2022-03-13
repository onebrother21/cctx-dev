import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevIconMenuComponent } from './cctx-dev-icon-menu.component';

describe('CCTXDevIconMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevIconMenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevIconMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-dash'`, () => {
    const fixture = TestBed.createComponent(CCTXDevIconMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-dash');
  });
});
