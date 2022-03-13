import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevAuthSignInComponent } from './cctx-dev-auth-signin.component';

describe('CCTXDevAuthSignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevAuthSignInComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevAuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-auth-signin'`, () => {
    const fixture = TestBed.createComponent(CCTXDevAuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-auth-signin');
  });
});
