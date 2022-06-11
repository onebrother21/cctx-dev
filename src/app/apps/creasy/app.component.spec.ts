import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_Component } from './app.component';

describe('Creasy_Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_Component);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy'`, () => {
    const fixture = TestBed.createComponent(Creasy_Component);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Creasy_Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('creasy app is running!');
  });
});
