import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgStarterComponent } from './ng-starter.component';

describe('NgStarterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NgStarterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgStarterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'ng-starter'`, () => {
    const fixture = TestBed.createComponent(NgStarterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('ng-starter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NgStarterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ng-starter app is running!');
  });
});
