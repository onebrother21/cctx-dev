import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevIconMenuItemComponent } from './cctx-dev-icon-menu-item.component';

describe('CCTXDevIconMenuItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevIconMenuItemComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevIconMenuItemComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-dash'`, () => {
    const fixture = TestBed.createComponent(CCTXDevIconMenuItemComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-dash');
  });
});
