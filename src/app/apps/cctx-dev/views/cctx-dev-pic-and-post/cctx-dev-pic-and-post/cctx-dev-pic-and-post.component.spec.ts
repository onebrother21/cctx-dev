import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevPicAndPostComponent } from './cctx-dev-pic-and-post.component';

describe('CCTXDevPicAndPostComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevPicAndPostComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevPicAndPostComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-pic-and-post'`, () => {
    const fixture = TestBed.createComponent(CCTXDevPicAndPostComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-pic-and-post');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CCTXDevPicAndPostComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cctx-dev-pic-and-post app is running!');
  });
});
