import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';
import { AuthSessionService } from './core/auth/auth-session.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render application title', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Ático y Jardín');
  });

  it('shows public section navigation and private access to unauthenticated visitors', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const links = Array.from(
      fixture.nativeElement.querySelectorAll('nav a'),
    ) as HTMLAnchorElement[];
    const linkTargets = links.map((link) => ({
      href: link.getAttribute('href'),
      text: link.textContent?.trim(),
    }));

    expect(linkTargets).toEqual([
      { href: '/#atico', text: 'Ático' },
      { href: '/#jardin', text: 'Jardín' },
      { href: '/#location', text: 'Ubicación' },
      { href: '/#contact', text: 'Contacto' },
      { href: '/login', text: 'Acceso privado' },
    ]);

    const privateAccessLink = links.find((link) => link.getAttribute('href') === '/login');

    expect(privateAccessLink?.textContent).toContain('Acceso privado');
    expect(privateAccessLink?.classList.contains('private-access-link')).toBe(true);
  });

  it('shows account management navigation to ADMIN', () => {
    const authSessionService = TestBed.inject(AuthSessionService);
    authSessionService.login(
      { username: 'admin', role: 'ADMIN' },
      { username: 'admin', password: 'secret' },
    );
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const links = Array.from(
      fixture.nativeElement.querySelectorAll('nav a'),
    ) as HTMLAnchorElement[];
    expect(links.some((link) => link.getAttribute('href') === '/accounts')).toBe(true);
  });

  it('hides account management navigation from STAFF', () => {
    const authSessionService = TestBed.inject(AuthSessionService);
    authSessionService.login(
      { username: 'staff', role: 'STAFF' },
      { username: 'staff', password: 'secret' },
    );
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const links = Array.from(
      fixture.nativeElement.querySelectorAll('nav a'),
    ) as HTMLAnchorElement[];
    expect(links.some((link) => link.getAttribute('href') === '/accounts')).toBe(false);
  });
});
