import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevErrorComponent } from './cctx-dev-error.component';

describe('CCTXDevErrorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevErrorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevErrorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-error'`, () => {
    const fixture = TestBed.createComponent(CCTXDevErrorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-error');
  });
});
