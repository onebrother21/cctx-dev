import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevNotFoundComponent } from './cctx-dev-not-found.component';

describe('CCTXDevNotFoundComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevNotFoundComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevNotFoundComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-not-found'`, () => {
    const fixture = TestBed.createComponent(CCTXDevNotFoundComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-not-found');
  });
});
