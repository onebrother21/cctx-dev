import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevServicesDashComponent } from './cctx-dev-services-dash.component';

describe('CCTXDevServicesDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevServicesDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevServicesDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-services-dash'`, () => {
    const fixture = TestBed.createComponent(CCTXDevServicesDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-services-dash');
  });
});
