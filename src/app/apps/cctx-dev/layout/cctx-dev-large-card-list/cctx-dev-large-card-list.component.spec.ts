import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevLargeCardListComponent } from './cctx-dev-large-card-list.component';

describe('CCTXDevLargeCardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevLargeCardListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevLargeCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-large-card-list'`, () => {
    const fixture = TestBed.createComponent(CCTXDevLargeCardListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-large-card-list');
  });
});
