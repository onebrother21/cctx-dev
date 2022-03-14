import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevUserHomePreviewComponent } from './cctx-dev-user-home-preview.component';

describe('CCTXDevUserHomePreviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevUserHomePreviewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevUserHomePreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-home-preview'`, () => {
    const fixture = TestBed.createComponent(CCTXDevUserHomePreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-home-preview');
  });
});
