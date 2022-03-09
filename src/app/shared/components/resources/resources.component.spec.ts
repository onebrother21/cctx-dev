import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ResourcesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ResourcesComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-apps'`, () => {
    const fixture = TestBed.createComponent(ResourcesComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-apps');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ResourcesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cctx-apps app is running!');
  });
});
