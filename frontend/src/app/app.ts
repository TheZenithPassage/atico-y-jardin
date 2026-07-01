import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthSessionService } from './core/auth/auth-session.service';
import { I18nService } from './core/i18n/i18n.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly authSessionService = inject(AuthSessionService);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly i18nService = inject(I18nService);

  readonly language = this.i18nService.language;
  readonly text = this.i18nService.text;

  readonly authenticated = this.authSessionService.authenticated;

  logout(): void {
    this.authSessionService.logout();
    this.router.navigate(['/login']);
  }

  toggleLanguage(): void {
    this.i18nService.toggleLanguage();
  }

  navigateToPublicSection(event: Event, sectionId: string): void {
    event.preventDefault();

    void this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      setTimeout(() => {
        const target = this.document.getElementById(sectionId);
        const header = this.document.querySelector<HTMLElement>('.app-header');
        const windowRef = this.document.defaultView;

        if (!target || !windowRef) {
          return;
        }

        const headerOffset = (header?.getBoundingClientRect().height ?? 0) + 24;
        const top = target.getBoundingClientRect().top + windowRef.scrollY - headerOffset;

        windowRef.scrollTo({ top });
      });
    });
  }
}
