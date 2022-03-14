import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevBlueBoxComponent } from './cctx-dev-blue-box.component';

describe('CCTXDevBlueBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevBlueBoxComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevBlueBoxComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-blue-box'`, () => {
    const fixture = TestBed.createComponent(CCTXDevBlueBoxComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-blue-box');
  });
});
