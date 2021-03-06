import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_FooterTwoComponent } from './footer-alt.component';

describe('Creasy_FooterTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_FooterTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_FooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-11'`, () => {
    const fixture = TestBed.createComponent(Creasy_FooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-11');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Creasy_FooterTwoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs-11 app is running!');
  });
});
