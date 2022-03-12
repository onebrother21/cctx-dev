import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevBannerComponent } from './cctx-dev-banner.component';

describe('CCTXDevBannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevBannerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevBannerComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-banner'`, () => {
    const fixture = TestBed.createComponent(CCTXDevBannerComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-banner');
  });
});
