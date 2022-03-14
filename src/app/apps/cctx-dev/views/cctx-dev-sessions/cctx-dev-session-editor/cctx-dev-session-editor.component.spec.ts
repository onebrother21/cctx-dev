import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CCTXDevSessionEditorComponent } from './cctx-dev-session-editor.component';

describe('CCTXDevSessionEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CCTXDevSessionEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CCTXDevSessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'cctx-dev-session-editor'`, () => {
    const fixture = TestBed.createComponent(CCTXDevSessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-dev-session-editor');
  });
});
