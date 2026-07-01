import { AppLanguage } from '../app-language';
import {
  ApartmentPresentation,
  BookingInquiryDraftLabels,
  ContactInfo,
} from '../../../features/public/models/public-landing.model';

export interface PublicLandingTranslations {
  nav: {
    atico: string;
    jardin: string;
    location: string;
    contact: string;
    privateAccess: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    body: string;
    notes: string[];
  };
  sectionLabels: {
    gallery: string;
    information: string;
    amenities: string;
    location: string;
    inquiry: string;
  };
  infoLabels: {
    capacity: string;
    bedrooms: string;
    bathrooms: string;
  };
  apartments: ApartmentPresentation[];
  sharedLocation: {
    title: string;
    description: string;
    addressDisplay: string;
    mapPlaceholder: string;
  };
  contact: ContactInfo;
  inquiry: BookingInquiryDraftLabels;
  footer: {
    brandLine: string;
    legal: string;
  };
}

export const PUBLIC_LANDING_TRANSLATIONS = {
  es: {
    nav: {
      atico: 'Ático',
      jardin: 'Jardín',
      location: 'Ubicación',
      contact: 'Contacto',
      privateAccess: 'Acceso privado',
    },
    hero: {
      eyebrow: 'Dos apartamentos turísticos, una presentación clara',
      title: 'Ático y Jardín',
      subtitle:
        'Una web pública para presentar cada apartamento por separado y abrir una vía honesta de consulta de disponibilidad.',
      primaryCta: 'Consultar disponibilidad',
      secondaryCta: 'Ver apartamentos',
      imageAlt:
        'TODO(images): imagen principal pendiente para la presentación pública de Ático y Jardín',
    },
    intro: {
      title: 'Una marca, dos espacios diferenciados',
      body: 'La primera versión se centra en mostrar Ático y Jardín con estructura profesional, galerías separadas y contenido preparado para sustituirse por fotos y textos aprobados.',
      notes: [
        'TODO(images): sustituir los marcadores visuales por fotos reales aprobadas.',
        'TODO(content): completar textos, servicios, ubicación y datos legales con información del propietario.',
        'Consulta inicial solamente: no confirma reservas, pagos ni bloqueos de fechas.',
      ],
    },
    sectionLabels: {
      gallery: 'Galería',
      information: 'Información',
      amenities: 'Servicios',
      location: 'Ubicación',
      inquiry: 'Consulta',
    },
    infoLabels: {
      capacity: 'Capacidad',
      bedrooms: 'Dormitorios',
      bathrooms: 'Baños',
    },
    apartments: [
      {
        id: 'atico',
        displayName: 'Ático',
        headline: 'TODO(content): titular del Ático pendiente de confirmar',
        summary: 'TODO(content): resumen breve del Ático pendiente de recibir y validar.',
        description:
          'Este espacio mostrará la descripción aprobada del Ático cuando estén disponibles el texto final y las fotos reales. Hasta entonces, evita publicar detalles no confirmados.',
        capacityLabel: 'TODO(owner/user): capacidad pendiente',
        bedroomsLabel: 'TODO(owner/user): dormitorios pendientes',
        bathroomsLabel: 'TODO(owner/user): baños pendientes',
        amenities: [
          { label: 'TODO(content): servicios del Ático pendientes' },
          { label: 'TODO(owner/user): equipamiento del Ático pendiente' },
          { label: 'TODO(owner/user): normas o notas del Ático pendientes' },
        ],
        gallery: [
          {
            src: '/landing/atico/placeholder-primary.svg',
            alt: 'TODO(images): foto principal real del Ático pendiente',
            caption: 'TODO(images): foto principal del Ático',
            isPrimary: true,
          },
          {
            src: '/landing/atico/placeholder-detail-1.svg',
            alt: 'TODO(images): imagen adicional real del Ático pendiente',
            caption: 'TODO(images): detalle del Ático',
          },
          {
            src: '/landing/atico/placeholder-detail-2.svg',
            alt: 'TODO(images): segunda imagen adicional real del Ático pendiente',
            caption: 'TODO(images): galería del Ático',
          },
        ],
        location: {
          title: 'Ubicación del Ático',
          description:
            'TODO(owner/user): indicar ubicación exacta o aproximada aprobada para publicar.',
          addressDisplay: 'TODO(owner/user): dirección o zona pendiente',
          accuracy: 'pending',
        },
        ctaLabel: 'Consultar el Ático',
      },
      {
        id: 'jardin',
        displayName: 'Jardín',
        headline: 'TODO(content): titular del Jardín pendiente de confirmar',
        summary: 'TODO(content): resumen breve del Jardín pendiente de recibir y validar.',
        description:
          'Este espacio mostrará la descripción aprobada del Jardín cuando estén disponibles el texto final y las fotos reales. Hasta entonces, evita publicar detalles no confirmados.',
        capacityLabel: 'TODO(owner/user): capacidad pendiente',
        bedroomsLabel: 'TODO(owner/user): dormitorios pendientes',
        bathroomsLabel: 'TODO(owner/user): baños pendientes',
        amenities: [
          { label: 'TODO(content): servicios del Jardín pendientes' },
          { label: 'TODO(owner/user): equipamiento del Jardín pendiente' },
          { label: 'TODO(owner/user): normas o notas del Jardín pendientes' },
        ],
        gallery: [
          {
            src: '/landing/jardin/placeholder-primary.svg',
            alt: 'TODO(images): foto principal real del Jardín pendiente',
            caption: 'TODO(images): foto principal del Jardín',
            isPrimary: true,
          },
          {
            src: '/landing/jardin/placeholder-detail-1.svg',
            alt: 'TODO(images): imagen adicional real del Jardín pendiente',
            caption: 'TODO(images): detalle del Jardín',
          },
          {
            src: '/landing/jardin/placeholder-detail-2.svg',
            alt: 'TODO(images): segunda imagen adicional real del Jardín pendiente',
            caption: 'TODO(images): galería del Jardín',
          },
        ],
        location: {
          title: 'Ubicación del Jardín',
          description:
            'TODO(owner/user): indicar ubicación exacta o aproximada aprobada para publicar.',
          addressDisplay: 'TODO(owner/user): dirección o zona pendiente',
          accuracy: 'pending',
        },
        ctaLabel: 'Consultar el Jardín',
      },
    ],
    sharedLocation: {
      title: 'Ubicación y contacto',
      description:
        'TODO(content): incorporar zona, referencias, transporte o indicaciones cuando estén aprobadas para la web pública.',
      addressDisplay: 'TODO(owner/user): ubicación pública pendiente',
      mapPlaceholder: 'TODO(owner/user): mapa o enlace pendiente de aprobación',
    },
    contact: {
      displayName: 'TODO(owner/user): nombre público de contacto',
      email: 'TODO(owner/user): email público',
      phone: 'TODO(owner/user): teléfono o WhatsApp público',
      preferredContactMethod: 'TODO(owner/user): método preferido de contacto',
      ctaPrimary: 'Solicitar información',
      ctaSecondary: 'Revisar datos pendientes',
    },
    inquiry: {
      title: 'Consulta visual de disponibilidad',
      description:
        'Formulario preparado para la demo. En v0.1.0 no envía datos, no confirma reservas y no bloquea fechas.',
      apartmentLabel: 'Apartamento',
      apartmentOptions: {
        atico: 'Ático',
        jardin: 'Jardín',
        either: 'Cualquiera de los dos',
      },
      checkInLabel: 'Entrada deseada',
      checkOutLabel: 'Salida deseada',
      guestNameLabel: 'Nombre',
      guestContactLabel: 'Contacto',
      messageLabel: 'Mensaje',
      submitLabel: 'Enviar consulta cuando esté conectado',
      helperText:
        'Sin pago, sin confirmación automática y sin bloqueo de disponibilidad en esta versión.',
    },
    footer: {
      brandLine: 'Ático y Jardín - web pública en preparación para la demo.',
      legal:
        'TODO(content): aviso legal, privacidad, licencias turísticas y datos del titular pendientes.',
    },
  },
  en: {
    nav: {
      atico: 'Ático',
      jardin: 'Jardín',
      location: 'Location',
      contact: 'Contact',
      privateAccess: 'Private access',
    },
    hero: {
      eyebrow: 'Two tourist apartments, one clear presentation',
      title: 'Ático y Jardín',
      subtitle:
        'A public website to present each apartment separately and offer an honest availability inquiry path.',
      primaryCta: 'Ask about availability',
      secondaryCta: 'View apartments',
      imageAlt: 'TODO(images): main image pending for the Ático y Jardín public presentation',
    },
    intro: {
      title: 'One brand, two distinct spaces',
      body: 'The first version focuses on a professional structure for Ático and Jardín, with separate galleries and content ready for approved photos and copy.',
      notes: [
        'TODO(images): replace visual placeholders with approved real photos.',
        'TODO(content): complete copy, services, location, and legal details with owner-approved information.',
        'Initial inquiry only: no confirmed reservations, payments, or date blocking.',
      ],
    },
    sectionLabels: {
      gallery: 'Gallery',
      information: 'Information',
      amenities: 'Amenities',
      location: 'Location',
      inquiry: 'Inquiry',
    },
    infoLabels: {
      capacity: 'Capacity',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
    },
    apartments: [
      {
        id: 'atico',
        displayName: 'Ático',
        headline: 'TODO(content): Ático headline pending confirmation',
        summary: 'TODO(content): short Ático summary pending review.',
        description:
          'This area will show the approved Ático description once final copy and real photos are available. Until then, unconfirmed details remain unpublished.',
        capacityLabel: 'TODO(owner/user): capacity pending',
        bedroomsLabel: 'TODO(owner/user): bedrooms pending',
        bathroomsLabel: 'TODO(owner/user): bathrooms pending',
        amenities: [
          { label: 'TODO(content): Ático amenities pending' },
          { label: 'TODO(owner/user): Ático equipment pending' },
          { label: 'TODO(owner/user): Ático rules or notes pending' },
        ],
        gallery: [
          {
            src: '/landing/atico/placeholder-primary.svg',
            alt: 'TODO(images): real primary Ático photo pending',
            caption: 'TODO(images): Ático primary photo',
            isPrimary: true,
          },
          {
            src: '/landing/atico/placeholder-detail-1.svg',
            alt: 'TODO(images): real additional Ático image pending',
            caption: 'TODO(images): Ático detail',
          },
          {
            src: '/landing/atico/placeholder-detail-2.svg',
            alt: 'TODO(images): second real additional Ático image pending',
            caption: 'TODO(images): Ático gallery',
          },
        ],
        location: {
          title: 'Ático location',
          description:
            'TODO(owner/user): add the exact or approximate location approved for public display.',
          addressDisplay: 'TODO(owner/user): address or area pending',
          accuracy: 'pending',
        },
        ctaLabel: 'Ask about Ático',
      },
      {
        id: 'jardin',
        displayName: 'Jardín',
        headline: 'TODO(content): Jardín headline pending confirmation',
        summary: 'TODO(content): short Jardín summary pending review.',
        description:
          'This area will show the approved Jardín description once final copy and real photos are available. Until then, unconfirmed details remain unpublished.',
        capacityLabel: 'TODO(owner/user): capacity pending',
        bedroomsLabel: 'TODO(owner/user): bedrooms pending',
        bathroomsLabel: 'TODO(owner/user): bathrooms pending',
        amenities: [
          { label: 'TODO(content): Jardín amenities pending' },
          { label: 'TODO(owner/user): Jardín equipment pending' },
          { label: 'TODO(owner/user): Jardín rules or notes pending' },
        ],
        gallery: [
          {
            src: '/landing/jardin/placeholder-primary.svg',
            alt: 'TODO(images): real primary Jardín photo pending',
            caption: 'TODO(images): Jardín primary photo',
            isPrimary: true,
          },
          {
            src: '/landing/jardin/placeholder-detail-1.svg',
            alt: 'TODO(images): real additional Jardín image pending',
            caption: 'TODO(images): Jardín detail',
          },
          {
            src: '/landing/jardin/placeholder-detail-2.svg',
            alt: 'TODO(images): second real additional Jardín image pending',
            caption: 'TODO(images): Jardín gallery',
          },
        ],
        location: {
          title: 'Jardín location',
          description:
            'TODO(owner/user): add the exact or approximate location approved for public display.',
          addressDisplay: 'TODO(owner/user): address or area pending',
          accuracy: 'pending',
        },
        ctaLabel: 'Ask about Jardín',
      },
    ],
    sharedLocation: {
      title: 'Location and contact',
      description:
        'TODO(content): add area notes, references, transport, or arrival guidance once approved for the public site.',
      addressDisplay: 'TODO(owner/user): public location pending',
      mapPlaceholder: 'TODO(owner/user): map or link pending approval',
    },
    contact: {
      displayName: 'TODO(owner/user): public contact name',
      email: 'TODO(owner/user): public email',
      phone: 'TODO(owner/user): public phone or WhatsApp',
      preferredContactMethod: 'TODO(owner/user): preferred contact method',
      ctaPrimary: 'Request information',
      ctaSecondary: 'Review pending details',
    },
    inquiry: {
      title: 'Visual availability inquiry',
      description:
        'Prepared for the demo. In v0.1.0 it does not submit data, confirm reservations, or block dates.',
      apartmentLabel: 'Apartment',
      apartmentOptions: {
        atico: 'Ático',
        jardin: 'Jardín',
        either: 'Either apartment',
      },
      checkInLabel: 'Preferred check-in',
      checkOutLabel: 'Preferred check-out',
      guestNameLabel: 'Name',
      guestContactLabel: 'Contact',
      messageLabel: 'Message',
      submitLabel: 'Send inquiry once connected',
      helperText:
        'No payment, no automatic confirmation, and no availability lock in this version.',
    },
    footer: {
      brandLine: 'Ático y Jardín - public website in preparation for the demo.',
      legal:
        'TODO(content): legal notice, privacy, tourist licenses, and operator details pending.',
    },
  },
} satisfies Record<AppLanguage, PublicLandingTranslations>;
