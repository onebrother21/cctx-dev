import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevAuthRegisterComponent } from './cctx-dev-auth-register.component';

describe('CCTXDevAuthRegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevAuthRegisterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevAuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-auth-register'`, () => {
    const fixture = TestBed.createComponent(CCTXDevAuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-auth-register');
  });
});
