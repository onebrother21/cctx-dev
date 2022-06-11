import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Creasy_SessionEditorComponent } from './message-editor.component';

describe('Creasy_SessionEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Creasy_SessionEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Creasy_SessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session-editor'`, () => {
    const fixture = TestBed.createComponent(Creasy_SessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session-editor');
  });
});
