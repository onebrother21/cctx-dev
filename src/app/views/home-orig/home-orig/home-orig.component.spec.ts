import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeOrigComponent } from './home-orig.component';

describe('HomeOrigComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeOrigComponent
      ],
    }).compileComponents();
  });

  it('should create the home-orig component', () => {
    const fixture = TestBed.createComponent(HomeOrigComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'home-orig'`, () => {
    const fixture = TestBed.createComponent(HomeOrigComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('home-orig');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeOrigComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('home-orig is running!');
  });
});
