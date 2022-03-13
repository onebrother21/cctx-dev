import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevFAQComponent } from './cctx-dev-faq.component';

describe('CCTXDevFAQComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevFAQComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevFAQComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-faq'`, () => {
    const fixture = TestBed.createComponent(CCTXDevFAQComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-faq');
  });
});
