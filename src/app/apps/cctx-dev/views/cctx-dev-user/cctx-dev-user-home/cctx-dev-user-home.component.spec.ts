import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevUserHomeComponent } from './cctx-dev-user-home.component';

describe('CCTXDevUserHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevUserHomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevUserHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-home'`, () => {
    const fixture = TestBed.createComponent(CCTXDevUserHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-home');
  });
});
