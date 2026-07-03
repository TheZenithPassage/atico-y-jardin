export type ApartmentId = 'atico' | 'jardin';
export type LocationAccuracy = 'exact' | 'approximate' | 'pending';

export interface Amenity {
  label: string;
  category?: string;
}

export interface ApartmentGalleryImage {
  src: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface SplitHeroPanel {
  apartmentId: ApartmentId;
  eyebrow: string;
  headline: string;
  summary: string;
  image: ApartmentGalleryImage;
  ctaLabel: string;
  ctaHref: string;
}

export interface HeroAction {
  label: string;
  href: string;
}

export interface LocationInfo {
  title: string;
  description: string;
  addressDisplay: string;
  mapLink?: string;
  accuracy: LocationAccuracy;
}

export interface ApartmentPresentation {
  id: ApartmentId;
  displayName: string;
  headline: string;
  summary: string;
  description: string;
  capacityLabel: string;
  bedroomsLabel: string;
  bathroomsLabel: string;
  amenities: Amenity[];
  gallery: ApartmentGalleryImage[];
  location: LocationInfo;
  ctaLabel: string;
}

export interface ContactInfo {
  displayName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface BookingInquiryDraftLabels {
  title: string;
  description: string;
  apartmentLabel: string;
  apartmentOptions: {
    atico: string;
    jardin: string;
    either: string;
  };
  checkInLabel: string;
  checkOutLabel: string;
  guestNameLabel: string;
  guestContactLabel: string;
  messageLabel: string;
  submitLabel: string;
  helperText: string;
}
