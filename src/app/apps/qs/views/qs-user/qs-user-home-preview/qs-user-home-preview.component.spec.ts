import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserHomePreviewComponent } from './qs-user-home-preview.component';

describe('QS_UserHomePreviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserHomePreviewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserHomePreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-preview'`, () => {
    const fixture = TestBed.createComponent(QS_UserHomePreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-preview');
  });
});
