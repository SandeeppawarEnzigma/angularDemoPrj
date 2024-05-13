import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Enzigma solutions' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // console.log(app.title);
    expect(app.title).toEqual('Enzigma solutions');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // console.log(fixture);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // console.log(compiled.querySelector('h1'));
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello Enzigma solutions, welcome sandeep');
  });

  it('should add two numbers', () => {
    const x = 3;
    const y = 4;
    const sum = x + y;
    expect(sum).toEqual(7);
  });

  it('should add two nembers', () => {
    const sum = TestBed.createComponent(AppComponent);
    const app = sum.componentInstance;
    expect(app.cal).toEqual(7);
  });
});
