import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestTwoComponent } from './test-two.component';

describe('TestTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the test-two component', () => {
    const fixture = TestBed.createComponent(TestTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'test-two'`, () => {
    const fixture = TestBed.createComponent(TestTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('test-two');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TestTwoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test-two is running!');
  });
});
