import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevFooterTwoComponent } from './cctx-dev-footer-two.component';

describe('CCTXDevFooterTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevFooterTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevFooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-11'`, () => {
    const fixture = TestBed.createComponent(CCTXDevFooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-11');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CCTXDevFooterTwoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cctx-dev-11 app is running!');
  });
});
