import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_FooterComponent } from './footer.component';

describe('Creasy_FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_FooterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-10'`, () => {
    const fixture = TestBed.createComponent(Creasy_FooterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-10');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Creasy_FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs-10 app is running!');
  });
});
