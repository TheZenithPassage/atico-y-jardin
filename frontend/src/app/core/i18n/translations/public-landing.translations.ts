import { AppLanguage } from '../app-language';
import {
  ApartmentPresentation,
  BookingInquiryDraftLabels,
  ContactInfo,
  HeroAction,
  SplitHeroPanel,
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
    contactCta: HeroAction;
    panelsLabel: string;
    panels: SplitHeroPanel[];
  };
  intro: {
    title: string;
    body: string;
    highlightsLabel: string;
    notes: string[];
  };
  sectionLabels: {
    gallery: string;
    information: string;
    amenities: string;
    highlights: string;
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
      eyebrow: 'Dos apartamentos',
      title: 'Ático y Jardín',
      subtitle: 'Dos apartamentos con consulta directa para revisar fechas.',
      contactCta: {
        label: 'Consultar disponibilidad',
        href: '#contact',
      },
      panelsLabel: 'Apartamentos Ático y Jardín',
      panels: [
        {
          apartmentId: 'atico',
          eyebrow: 'Ático',
          headline: 'Luz y calma en altura',
          summary: 'Ático luminoso para empezar.',
          image: {
            src: '/landing/atico/placeholder-primary.svg',
            alt: 'Imagen de referencia del Ático',
          },
          ctaLabel: 'Ver Ático',
          ctaHref: '#atico',
        },
        {
          apartmentId: 'jardin',
          eyebrow: 'Jardín',
          headline: 'Serenidad con aire exterior',
          summary: 'Jardín sereno para imaginar la estancia.',
          image: {
            src: '/landing/jardin/placeholder-primary.svg',
            alt: 'Imagen de referencia del Jardín',
          },
          ctaLabel: 'Ver Jardín',
          ctaHref: '#jardin',
        },
      ],
    },
    intro: {
      title: 'Una marca, dos espacios diferenciados',
      body: 'Ático y Jardín reúne dos apartamentos con presentación independiente, consulta directa y una experiencia pública pensada para revisar cada espacio con calma.',
      highlightsLabel: 'Aspectos destacados',
      notes: [
        'Cada apartamento mantiene su propia galería, información y vía de consulta.',
        'La disponibilidad se revisa por contacto directo antes de confirmar fechas.',
        'El acceso privado queda separado de la experiencia pública.',
      ],
    },
    sectionLabels: {
      gallery: 'Galería',
      information: 'Información',
      amenities: 'Servicios',
      highlights: 'Puntos destacados',
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
        headline: 'Ático, un espacio luminoso dentro de Ático y Jardín',
        summary:
          'Un espacio luminoso pensado para estancias cómodas, con más información bajo consulta.',
        description:
          'El Ático se presenta con una lectura breve para imaginar el ambiente, resolver dudas y pedir los detalles pendientes por contacto directo.',
        capacityLabel: 'Más información disponible bajo consulta',
        bedroomsLabel: 'Distribución disponible bajo consulta',
        bathroomsLabel: 'Detalles disponibles bajo consulta',
        amenities: [
          { label: 'Un espacio luminoso pensado para estancias cómodas' },
          { label: 'Lectura rápida para orientar la consulta' },
          { label: 'Más detalles disponibles por contacto directo' },
        ],
        gallery: [
          {
            src: '/landing/atico/placeholder-primary.svg',
            alt: 'Imagen de referencia del Ático',
            caption: 'Imagen principal del Ático',
            isPrimary: true,
          },
          {
            src: '/landing/atico/placeholder-detail-1.svg',
            alt: 'Imagen adicional de referencia del Ático',
            caption: 'Detalle del Ático',
          },
          {
            src: '/landing/atico/placeholder-detail-2.svg',
            alt: 'Segunda imagen adicional de referencia del Ático',
            caption: 'Galería del Ático',
          },
        ],
        location: {
          title: 'Ubicación del Ático',
          description:
            'La ubicación se comunicará con el nivel de detalle adecuado durante la consulta.',
          addressDisplay: 'Ubicación disponible bajo consulta',
          accuracy: 'pending',
        },
        ctaLabel: 'Consultar el Ático',
      },
      {
        id: 'jardin',
        displayName: 'Jardín',
        headline: 'Jardín, una propuesta independiente dentro de Ático y Jardín',
        summary:
          'Un apartamento presentado con recorrido propio, información separada y consulta directa.',
        description:
          'Jardín se presenta como un espacio diferenciado para revisar información, aclarar necesidades y confirmar disponibilidad por contacto directo.',
        capacityLabel: 'Consultar capacidad',
        bedroomsLabel: 'Consultar distribución',
        bathroomsLabel: 'Consultar baños',
        amenities: [
          { label: 'Galería y ficha propias' },
          { label: 'Consulta directa antes de reservar' },
          { label: 'Detalles finales compartidos antes de confirmar' },
        ],
        gallery: [
          {
            src: '/landing/jardin/placeholder-primary.svg',
            alt: 'Imagen de referencia del Jardín',
            caption: 'Imagen principal del Jardín',
            isPrimary: true,
          },
          {
            src: '/landing/jardin/placeholder-detail-1.svg',
            alt: 'Imagen adicional de referencia del Jardín',
            caption: 'Detalle del Jardín',
          },
          {
            src: '/landing/jardin/placeholder-detail-2.svg',
            alt: 'Segunda imagen adicional de referencia del Jardín',
            caption: 'Galería del Jardín',
          },
        ],
        location: {
          title: 'Ubicación del Jardín',
          description:
            'La ubicación se comunicará con el nivel de detalle adecuado durante la consulta.',
          addressDisplay: 'Ubicación disponible bajo consulta',
          accuracy: 'pending',
        },
        ctaLabel: 'Consultar el Jardín',
      },
    ],
    sharedLocation: {
      title: 'Ubicación y contacto',
      description:
        'Revisa la zona y el contacto directo para orientar la consulta sobre cualquiera de los dos apartamentos.',
      addressDisplay: 'Zona compartida bajo consulta',
      mapPlaceholder: 'Referencia de ubicación por contacto directo',
    },
    contact: {
      displayName: 'Atención directa',
      email: 'Canal de contacto',
      phone: 'Contacto por el canal acordado',
      preferredContactMethod: 'Escríbenos para revisar fechas, preferencias y próximos pasos',
      ctaPrimary: 'Solicitar información',
      ctaSecondary: 'Revisar detalles',
    },
    inquiry: {
      title: 'Consulta de disponibilidad',
      description:
        'Formulario orientativo para preparar la conversación. La disponibilidad se revisa por contacto directo antes de cualquier confirmación.',
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
      submitLabel: 'Continuar por contacto directo',
      helperText: 'Sin pago, sin confirmación automática y sin bloqueo de disponibilidad.',
    },
    footer: {
      brandLine: 'Ático y Jardín - presentación pública de dos apartamentos turísticos.',
      legal:
        'Condiciones, privacidad y datos oficiales se revisan por contacto directo antes de confirmar cualquier estancia.',
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
      eyebrow: 'Two apartments',
      title: 'Ático y Jardín',
      subtitle: 'Two apartments with direct contact to review dates.',
      contactCta: {
        label: 'Ask about availability',
        href: '#contact',
      },
      panelsLabel: 'Ático and Jardín apartments',
      panels: [
        {
          apartmentId: 'atico',
          eyebrow: 'Ático',
          headline: 'Upper light and calm',
          summary: 'A bright upper-apartment start.',
          image: {
            src: '/landing/atico/placeholder-primary.svg',
            alt: 'Reference image for Ático',
          },
          ctaLabel: 'View Ático',
          ctaHref: '#atico',
        },
        {
          apartmentId: 'jardin',
          eyebrow: 'Jardín',
          headline: 'Calm with outdoor ease',
          summary: 'A calm first look at Jardín.',
          image: {
            src: '/landing/jardin/placeholder-primary.svg',
            alt: 'Reference image for Jardín',
          },
          ctaLabel: 'View Jardín',
          ctaHref: '#jardin',
        },
      ],
    },
    intro: {
      title: 'One brand, two distinct spaces',
      body: 'Ático y Jardín brings together two apartments with separate presentations, direct inquiry, and a public experience designed for reviewing each space calmly.',
      highlightsLabel: 'Highlights',
      notes: [
        'Each apartment keeps its own gallery, information, and inquiry path.',
        'Availability is reviewed through direct contact before dates are confirmed.',
        'Private access stays separate from the public experience.',
      ],
    },
    sectionLabels: {
      gallery: 'Gallery',
      information: 'Information',
      amenities: 'Amenities',
      highlights: 'Highlights',
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
        headline: 'Ático, a bright space within Ático y Jardín',
        summary:
          'A bright space shaped for comfortable stays, with more information available on inquiry.',
        description:
          'Ático is presented with a short, clear overview for reviewing the atmosphere, asking questions, and requesting pending details through direct contact.',
        capacityLabel: 'More information available on inquiry',
        bedroomsLabel: 'Layout available on inquiry',
        bathroomsLabel: 'Details available on inquiry',
        amenities: [
          { label: 'A bright space shaped for comfortable stays' },
          { label: 'Quick overview to guide the inquiry' },
          { label: 'More details available through direct contact' },
        ],
        gallery: [
          {
            src: '/landing/atico/placeholder-primary.svg',
            alt: 'Reference image for Ático',
            caption: 'Main image for Ático',
            isPrimary: true,
          },
          {
            src: '/landing/atico/placeholder-detail-1.svg',
            alt: 'Additional reference image for Ático',
            caption: 'Ático detail',
          },
          {
            src: '/landing/atico/placeholder-detail-2.svg',
            alt: 'Second additional reference image for Ático',
            caption: 'Ático gallery',
          },
        ],
        location: {
          title: 'Ático location',
          description:
            'Location details are shared with the appropriate level of detail during the inquiry.',
          addressDisplay: 'Location available on inquiry',
          accuracy: 'pending',
        },
        ctaLabel: 'Ask about Ático',
      },
      {
        id: 'jardin',
        displayName: 'Jardín',
        headline: 'Jardín, an independent option within Ático y Jardín',
        summary:
          'An apartment presented with its own path, separate information, and direct inquiry.',
        description:
          'Jardín is presented as a distinct space for reviewing information, clarifying needs, and confirming availability through direct contact.',
        capacityLabel: 'Ask about capacity',
        bedroomsLabel: 'Ask about layout',
        bathroomsLabel: 'Ask about bathrooms',
        amenities: [
          { label: 'Dedicated gallery and profile' },
          { label: 'Direct inquiry before booking' },
          { label: 'Final details shared before confirmation' },
        ],
        gallery: [
          {
            src: '/landing/jardin/placeholder-primary.svg',
            alt: 'Reference image for Jardín',
            caption: 'Main image for Jardín',
            isPrimary: true,
          },
          {
            src: '/landing/jardin/placeholder-detail-1.svg',
            alt: 'Additional reference image for Jardín',
            caption: 'Jardín detail',
          },
          {
            src: '/landing/jardin/placeholder-detail-2.svg',
            alt: 'Second additional reference image for Jardín',
            caption: 'Jardín gallery',
          },
        ],
        location: {
          title: 'Jardín location',
          description:
            'Location details are shared with the appropriate level of detail during the inquiry.',
          addressDisplay: 'Location available on inquiry',
          accuracy: 'pending',
        },
        ctaLabel: 'Ask about Jardín',
      },
    ],
    sharedLocation: {
      title: 'Location and contact',
      description:
        'Review the location and direct contact path to guide an inquiry for either apartment.',
      addressDisplay: 'Shared area available on inquiry',
      mapPlaceholder: 'Location reference by direct contact',
    },
    contact: {
      displayName: 'Direct attention',
      email: 'Contact channel',
      phone: 'Contact through the agreed channel',
      preferredContactMethod: 'Write to review dates, preferences, and next steps',
      ctaPrimary: 'Request information',
      ctaSecondary: 'Review details',
    },
    inquiry: {
      title: 'Availability inquiry',
      description:
        'An orienting form for preparing the conversation. Availability is reviewed through direct contact before any confirmation.',
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
      submitLabel: 'Continue by direct contact',
      helperText: 'No payment, no automatic confirmation, and no availability lock.',
    },
    footer: {
      brandLine: 'Ático y Jardín - public presentation for two tourist apartments.',
      legal:
        'Terms, privacy, and official details are reviewed by direct contact before any stay is confirmed.',
    },
  },
} satisfies Record<AppLanguage, PublicLandingTranslations>;
