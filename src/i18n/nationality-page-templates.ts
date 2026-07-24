import type { Locale } from "./config";
import { extraNationalityPageTemplates } from "./nationality-page-extra-locales";

export type NationalityPageTemplates = {
  metaTitleTravel: string;
  metaTitleVisa: string;
  entryRequirementsTitle: string;
  entryRequirements: string[];
  visaRequirementsTitle: string;
  visaRequirements: string[];
  visaFaqQuestion: string;
  cuscoPitch: string;
  travelFaqQuestion: string;
  travelFaqAnswer: string;
  processTitle: string;
  processSteps: { title: string; text: string }[];
  whyCuscoTitle: string;
  whyCusco: string[];
  faqTitle: string;
  extraFaqs: { q: string; a: string }[];
  ctaTitleVisa: string;
  ctaTextVisa: string;
  relatedTitle: string;
};

const es: NationalityPageTemplates = {
  metaTitleTravel: "Viaje a Bolivia — {country} | Conexión Bolivia",
  metaTitleVisa: "Visa Bolivia — {country} | Conexión Bolivia",
  entryRequirementsTitle: "Requisitos de entrada para ciudadanos de {country}",
  entryRequirements: [
    "Pasaporte vigente (mínimo 6 meses de validez)",
    "Certificado de vacuna contra fiebre amarilla (requerido para Bolivia)",
    "Itinerario de viaje o reservas de vuelo",
    "Comprobante de alojamiento o reserva de hotel",
  ],
  visaRequirementsTitle: "Documentos necesarios para ciudadanos de {country}",
  visaRequirements: [
    "Pasaporte vigente (mínimo 6 meses de validez)",
    "Foto tipo pasaporte con fondo blanco",
    "Certificado de vacuna contra fiebre amarilla",
    "Itinerario de viaje o reservas de vuelo",
    "Confirmación de reserva de hotel",
    "Estado de cuenta bancario con fondos suficientes",
    "Formulario de solicitud de visa completado",
  ],
  visaFaqQuestion: "¿Los ciudadanos de {country} necesitan visa para Bolivia?",
  cuscoPitch:
    "Si pasas por Cusco rumbo al Salar de Uyuni o el altiplano boliviano, nuestra oficina — frente al Consulado de Bolivia — es el lugar más rápido y seguro para tramitar tu visa.",
  travelFaqQuestion: "Voy al Salar de Uyuni — ¿qué necesito antes de cruzar a Bolivia?",
  travelFaqAnswer:
    "Con pasaporte vigente y los requisitos de entrada oficiales puedes cruzar sin visa. Escríbenos si quieres orientación sobre el cruce desde Cusco.",
  processTitle: "Cómo obtener tu visa en Cusco",
  processSteps: [
    {
      title: "Escríbenos por WhatsApp",
      text: "Envía los datos de tu pasaporte y fechas de viaje. Confirmamos requisitos en minutos.",
    },
    {
      title: "Visita nuestra oficina o envía documentos",
      text: "Acude a nuestra oficina en Cusco o envía tus documentos con anticipación.",
    },
    {
      title: "Gestionamos el trámite consular",
      text: "Revisamos tus documentos, los presentamos al consulado y te avisamos cuando esté lista.",
    },
    {
      title: "Recoge tu visa — a menudo el mismo día",
      text: "Con documentos preparados, la recogida toma unos 10 minutos.",
    },
  ],
  whyCuscoTitle: "Por qué tramitar en Cusco",
  whyCusco: [
    "Asistencia personalizada — sin barreras de idioma en la frontera",
    "Revisión de documentos antes de la presentación",
    "Oficina frente al Consulado de Bolivia",
    "Trámite el mismo día — sin esperas en la frontera",
    "Confianza de miles de viajeros internacionales",
  ],
  faqTitle: "Preguntas frecuentes",
  extraFaqs: [
    {
      q: "¿Puedo obtener la visa el mismo día en Cusco?",
      a: "Sí. Con todos los documentos listos, el trámite toma aproximadamente 30 minutos.",
    },
    {
      q: "¿Me conviene tramitar en Cusco o en la frontera?",
      a: "Cusco es muy recomendable. Obtienes asesoría personalizada y un proceso más rápido y seguro.",
    },
    {
      q: "Voy al Salar de Uyuni — ¿necesito la visa antes?",
      a: "Sí. Tramita tu visa en Cusco antes de cruzar a Bolivia para evitar demoras en la frontera.",
    },
  ],
  ctaTitleVisa: "¿Listo para tu visa a Bolivia?",
  ctaTextVisa:
    "Escríbenos por WhatsApp con tu nacionalidad y fechas de viaje. Respondemos de inmediato.",
  relatedTitle: "Guías de visa para otras nacionalidades",
};

const en: NationalityPageTemplates = {
  metaTitleTravel: "Bolivia Travel — {country} | Conexión Bolivia",
  metaTitleVisa: "Bolivia Visa — {country} | Conexión Bolivia",
  entryRequirementsTitle: "Entry requirements for {country} citizens",
  entryRequirements: [
    "Valid passport (minimum 6 months validity)",
    "Yellow fever vaccination certificate (required for Bolivia)",
    "Travel itinerary or flight reservations",
    "Proof of accommodation or hotel booking",
  ],
  visaRequirementsTitle: "Documents required for {country} citizens",
  visaRequirements: [
    "Valid passport (minimum 6 months validity)",
    "Passport-size photo with white background",
    "Yellow fever vaccination certificate",
    "Travel itinerary or flight reservations",
    "Hotel booking confirmation",
    "Bank statement showing sufficient funds",
    "Completed visa application form",
  ],
  visaFaqQuestion: "Do {country} citizens need a visa for Bolivia?",
  cuscoPitch:
    "If you're traveling through Cusco on your way to Salar de Uyuni or the Bolivian altiplano, our office — directly across from the Bolivian Consulate — is the fastest and safest place to get your visa processed.",
  travelFaqQuestion: "I'm going to Salar de Uyuni — what do I need before crossing into Bolivia?",
  travelFaqAnswer:
    "With a valid passport and the official entry requirements, you can cross without a visa. Message us if you'd like guidance on crossing from Cusco.",
  processTitle: "How to get your Bolivia visa in Cusco",
  processSteps: [
    {
      title: "Contact us on WhatsApp",
      text: "Send your passport details and travel dates. We confirm requirements within minutes.",
    },
    {
      title: "Visit our office or send documents",
      text: "Come to our Cusco office or send your documents in advance.",
    },
    {
      title: "We handle the consulate submission",
      text: "We review your documents, submit to the consulate, and notify you when your visa is ready.",
    },
    {
      title: "Pick up your visa — often same day",
      text: "With documents prepared in advance, pickup takes about 10 minutes.",
    },
  ],
  whyCuscoTitle: "Why process your visa in Cusco",
  whyCusco: [
    "Personal assistance — no language barriers at the border",
    "Document review before submission prevents costly mistakes",
    "Office located directly across from the Bolivian Consulate",
    "Same-day processing — no waiting days at a remote border crossing",
    "Trusted by thousands of international travelers",
  ],
  faqTitle: "Frequently asked questions",
  extraFaqs: [
    {
      q: "Can I get my Bolivia visa on the same day in Cusco?",
      a: "Yes. If you visit our office with all documents ready, processing takes approximately 30 minutes.",
    },
    {
      q: "Should I get my visa in Cusco or at the Bolivia border?",
      a: "Cusco is strongly recommended. You get personal guidance and a faster, safer process.",
    },
    {
      q: "I'm going to Salar de Uyuni — do I need the visa first?",
      a: "Yes. Process your visa in Cusco before crossing into Bolivia to avoid border delays.",
    },
  ],
  ctaTitleVisa: "Ready to get your Bolivia visa?",
  ctaTextVisa: "Message us on WhatsApp with your nationality and travel dates. We respond immediately.",
  relatedTitle: "Visa guides for other nationalities",
};

const nationalityPageTemplates: Partial<Record<Locale, NationalityPageTemplates>> = {
  es,
  en,
  ...extraNationalityPageTemplates,
};

export function getNationalityPageTemplates(locale: Locale): NationalityPageTemplates {
  return nationalityPageTemplates[locale] ?? es;
}
