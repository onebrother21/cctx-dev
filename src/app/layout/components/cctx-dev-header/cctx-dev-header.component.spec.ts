import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevHeaderComponent } from './cctx-dev-header.component';

describe('CCTXDevHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevHeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevHeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev'`, () => {
    const fixture = TestBed.createComponent(CCTXDevHeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CCTXDevHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cctx-dev app is running!');
  });
});
