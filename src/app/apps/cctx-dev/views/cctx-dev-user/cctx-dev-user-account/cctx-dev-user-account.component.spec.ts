import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevUserAccountComponent } from './cctx-dev-user-account.component';

describe('CCTXDevUserAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevUserAccountComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevUserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-account'`, () => {
    const fixture = TestBed.createComponent(CCTXDevUserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-account');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CCTXDevUserAccountComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cctx-dev-user-account app is running!');
  });
});
