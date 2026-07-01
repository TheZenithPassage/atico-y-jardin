import { Component, inject } from '@angular/core';

import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'app-public-landing-page',
  templateUrl: './public-landing-page.html',
  styleUrl: './public-landing-page.scss',
})
export class PublicLandingPage {
  private readonly i18nService = inject(I18nService);

  readonly text = this.i18nService.text;

  blockInquirySubmit(event: Event): void {
    event.preventDefault();
  }
}
