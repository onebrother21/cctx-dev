import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserAccountComponent } from './me-account.component';

describe('Creasy_UserAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserAccountComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'creasy-user-account'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('creasy-user-account');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Creasy_UserAccountComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('creasy-user-account app is running!');
  });
});
