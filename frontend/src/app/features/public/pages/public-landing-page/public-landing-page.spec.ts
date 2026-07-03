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

  it('renders split hero panels with local apartment image sources', () => {
    const fixture = TestBed.createComponent(PublicLandingPage);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const panelsRegion = compiled.querySelector<HTMLElement>('.hero-panels');
    const panels = Array.from(compiled.querySelectorAll<HTMLElement>('.hero-panel'));
    const panelText = panels.map((panel) => panel.textContent ?? '').join(' ');
    const imageSources = panels.map(
      (panel) => panel.querySelector<HTMLImageElement>('img')?.getAttribute('src') ?? '',
    );

    expect(panelsRegion?.getAttribute('aria-label')).toBe('Apartamentos Ático y Jardín');
    expect(panels).toHaveLength(2);
    expect(panelText).toContain('Ático');
    expect(panelText).toContain('Jardín');
    expect(imageSources).toEqual([
      '/landing/atico/placeholder-primary.svg',
      '/landing/jardin/placeholder-primary.svg',
    ]);
  });

  it('wires hero CTAs to public anchors without fake booking wording', () => {
    const fixture = TestBed.createComponent(PublicLandingPage);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector<HTMLElement>('.hero');
    const heroLinks = Array.from(hero?.querySelectorAll<HTMLAnchorElement>('a') ?? []).map(
      (link) => ({
        href: link.getAttribute('href'),
        text: link.textContent?.trim(),
      }),
    );
    const heroText = hero?.textContent ?? '';

    expect(heroLinks).toEqual([
      { href: '#contact', text: 'Consultar disponibilidad' },
      { href: '#atico', text: 'Ver Ático' },
      { href: '#jardin', text: 'Ver Jardín' },
    ]);
    expect(heroText).not.toMatch(
      /reserva inmediata|reserva automática|pago|payment|book now|instant booking|confirmación automática|tiempo real|iCal|OTA/i,
    );
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
