import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_HeaderComponent } from './header.component';

describe('Creasy_HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_HeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs'`, () => {
    const fixture = TestBed.createComponent(Creasy_HeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Creasy_HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs app is running!');
  });
});
