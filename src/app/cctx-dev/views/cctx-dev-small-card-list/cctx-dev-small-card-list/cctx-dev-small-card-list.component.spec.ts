import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSmallCardListComponent } from './cctx-dev-small-card-list.component';

describe('CCTXDevSmallCardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSmallCardListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSmallCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-small-card-list'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSmallCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-small-card-list');
  });
});
