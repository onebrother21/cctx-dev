import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevHomeComponent } from './cctx-dev-home.component';

describe('CCTXDevHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevHomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-home'`, () => {
    const fixture = TestBed.createComponent(CCTXDevHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-home');
  });
});
