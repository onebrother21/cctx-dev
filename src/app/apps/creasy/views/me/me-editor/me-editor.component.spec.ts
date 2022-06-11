import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_UserAccountEditorComponent } from './me-editor.component';

describe('Creasy_UserAccountEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_UserAccountEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_UserAccountEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-acct-editor'`, () => {
    const fixture = TestBed.createComponent(Creasy_UserAccountEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-acct-editor');
  });
});
