import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevAuthSignUpComponent } from './cctx-dev-auth-signup.component';

describe('CCTXDevAuthSignUpComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevAuthSignUpComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevAuthSignUpComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-auth-signup'`, () => {
    const fixture = TestBed.createComponent(CCTXDevAuthSignUpComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-auth-signup');
  });
});
