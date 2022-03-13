import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevContactUsComponent } from './cctx-dev-contact-us.component';

describe('CCTXDevContactUsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevContactUsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevContactUsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-contact-us'`, () => {
    const fixture = TestBed.createComponent(CCTXDevContactUsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-contact-us');
  });
});
