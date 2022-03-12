import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevIconComponent } from './cctx-dev-icon.component';

describe('CCTXDevIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevIconComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevIconComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-user-dash'`, () => {
    const fixture = TestBed.createComponent(CCTXDevIconComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-user-dash');
  });
});
