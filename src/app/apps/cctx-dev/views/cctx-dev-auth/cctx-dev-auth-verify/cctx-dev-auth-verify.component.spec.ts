import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevAuthVerifyComponent } from './cctx-dev-auth-verify.component';

describe('CCTXDevAuthVerifyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevAuthVerifyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevAuthVerifyComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-auth-verify'`, () => {
    const fixture = TestBed.createComponent(CCTXDevAuthVerifyComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-auth-verify');
  });
});
