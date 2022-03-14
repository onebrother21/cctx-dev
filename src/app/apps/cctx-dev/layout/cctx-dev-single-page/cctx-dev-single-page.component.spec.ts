import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSinglePageComponent } from './cctx-dev-single-page.component';

describe('CCTXDevSinglePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSinglePageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSinglePageComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-single-page'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSinglePageComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-single-page');
  });
});
