import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_ErrorComponent } from './qs-error.component';

describe('QS_ErrorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_ErrorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_ErrorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-error'`, () => {
    const fixture = TestBed.createComponent(QS_ErrorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-error');
  });
});
