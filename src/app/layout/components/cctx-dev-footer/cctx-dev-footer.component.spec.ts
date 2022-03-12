import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevFooterComponent } from './cctx-dev-footer.component';

describe('CCTXDevFooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevFooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevFooterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-10'`, () => {
    const fixture = TestBed.createComponent(CCTXDevFooterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-10');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CCTXDevFooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cctx-dev-10 app is running!');
  });
});
