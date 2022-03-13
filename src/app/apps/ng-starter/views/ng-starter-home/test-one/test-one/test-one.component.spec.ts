import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestOneComponent } from './test-one.component';

describe('TestOneComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestOneComponent
      ],
    }).compileComponents();
  });

  it('should create the test-one component', () => {
    const fixture = TestBed.createComponent(TestOneComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'test-one'`, () => {
    const fixture = TestBed.createComponent(TestOneComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('test-one');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TestOneComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test-one is running!');
  });
});
