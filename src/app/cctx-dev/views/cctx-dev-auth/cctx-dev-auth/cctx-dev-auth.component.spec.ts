import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevAuthComponent } from './cctx-dev-auth.component';

describe('CCTXDevAuthComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevAuthComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevAuthComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-auth'`, () => {
    const fixture = TestBed.createComponent(CCTXDevAuthComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-auth');
  });
});
