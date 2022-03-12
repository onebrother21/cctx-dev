import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevUserDashComponent } from './cctx-dev-user-dash.component';

describe('CCTXDevUserDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevUserDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevUserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-dash'`, () => {
    const fixture = TestBed.createComponent(CCTXDevUserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-dash');
  });
});
