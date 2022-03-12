import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevAuthForgotComponent } from './cctx-dev-auth-forgot.component';

describe('CCTXDevAuthForgotComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevAuthForgotComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevAuthForgotComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-auth-forgot'`, () => {
    const fixture = TestBed.createComponent(CCTXDevAuthForgotComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-auth-forgot');
  });
});
