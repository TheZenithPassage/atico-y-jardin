import { TestBed } from '@angular/core/testing';

import { PublicLandingPage } from './public-landing-page';

describe('PublicLandingPage', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [PublicLandingPage],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('renders Ático y Jardín without visible scaffold text', () => {
    const fixture = TestBed.createComponent(PublicLandingPage);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const visibleText = compiled.textContent ?? '';

    expect(visibleText).toContain('Ático y Jardín');
    expect(visibleText).not.toMatch(/CatWorld/i);
    expect(visibleText).not.toMatch(/\bTODO\b/i);
    expect(visibleText).not.toMatch(/debug/i);
    expect(visibleText).not.toMatch(/scaffold/i);
    expect(visibleText).not.toMatch(/\bv\d+\.\d+\.\d+\b/i);
  });

  it('does not expose scaffold placeholders on form fields or media copy', () => {
    const fixture = TestBed.createComponent(PublicLandingPage);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const placeholderText = Array.from(
      compiled.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[placeholder]'),
    )
      .map((control) => control.getAttribute('placeholder') ?? '')
      .join(' ');
    const mediaText = Array.from(compiled.querySelectorAll<HTMLImageElement>('img'))
      .map((image) => image.alt)
      .join(' ');

    expect(`${placeholderText} ${mediaText}`).not.toMatch(/\bTODO\b|owner\/user|guest/i);
  });

  it('keeps Ático and Jardín as distinct public apartment sections', () => {
    const fixture = TestBed.createComponent(PublicLandingPage);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#atico')?.textContent).toContain('Ático');
    expect(compiled.querySelector('#jardin')?.textContent).toContain('Jardín');
  });

  it('renders public navbar anchor targets for apartments, location, and contact', () => {
    const fixture = TestBed.createComponent(PublicLandingPage);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#atico')?.textContent).toContain('Ático');
    expect(compiled.querySelector('#jardin')?.textContent).toContain('Jardín');
    expect(compiled.querySelector('#location')?.textContent).toContain('Ubicación');
    expect(compiled.querySelector('#contact')?.textContent).toContain('Contacto');
  });
});
