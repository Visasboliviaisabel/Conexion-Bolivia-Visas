import type { Locale } from "./config";
import {
  arVisaChecker,
  heVisaChecker,
  hiVisaChecker,
  idVisaChecker,
  ptVisaChecker,
  ruVisaChecker,
  srVisaChecker,
  ukVisaChecker,
  zhTwVisaChecker,
  zhVisaChecker,
} from "./visa-checker-extra-locales";

export type VisaCheckerCopy = {
  title: string;
  subtitle: string;
  countryLabel: string;
  countryPlaceholder: string;
  noResultsLabel: string;
  submitLabel: string;
  disclaimer: string;
  groupsExplain: { label: string; text: string }[];
  group1Redirecting: string;
  group1RedirectEyebrow: string;
  group1RedirectTitle: string;
  group1RedirectBody: string;
  group1RedirectProgress: string;
  group2Title: string;
  group2Text: string;
  group3Title: string;
  group3Text: string;
  guideLinkLabel: string;
  whatsappLabel: string;
  unknownTitle: string;
  unknownText: string;
  consultPrompt: string;
  consultCta: string;
  consultWhatsappPrefill: string;
  travelBannerTitle: string;
  travelBannerText: string;
  travelWelcomeEyebrow: string;
  travelWelcomeTitle: string;
  travelWelcomeCountry: string;
  travelWelcomeBody: string;
  travelWelcomeNext: string;
};

const es: VisaCheckerCopy = {
  title: "¿Necesitas visa para Bolivia?",
  subtitle:
    "Escribe o elige tu país de origen. Te indicamos si necesitas visa y cuál es el siguiente paso.",
  countryLabel: "País de tu pasaporte",
  countryPlaceholder: "Escribe o elige tu país…",
  noResultsLabel: "No encontramos ese país. Intenta otra búsqueda o escríbenos por WhatsApp.",
  submitLabel: "Verificar requisito",
  disclaimer:
    "Información orientativa según los grupos oficiales de Bolivia. Los requisitos pueden cambiar.",
  groupsExplain: [
    {
      label: "Grupo I",
      text: "No necesitas visa. Puedes entrar con pasaporte o documento válido.",
    },
    {
      label: "Grupo II",
      text: "Necesitas visa de turismo antes de entrar a Bolivia.",
    },
    {
      label: "Grupo III",
      text: "Necesitas visa, con verificación previa de Migraciones.",
    },
  ],
  group1Redirecting:
    "Buenas noticias: con tu pasaporte de {country} no necesitas visa para Bolivia. Redirigiendo a tours con Isabel…",
  group1RedirectEyebrow: "Resultado de tu consulta",
  group1RedirectTitle: "No necesitas visa",
  group1RedirectBody:
    "Te llevamos a nuestra sección de viajes para reservar tours en Cusco y Bolivia con Isabel.",
  group1RedirectProgress: "Redirigiendo automáticamente…",
  group2Title: "Necesitas visa para Bolivia",
  group2Text:
    "Puedes tramitarla en Cusco, frente al consulado, con asesoría personalizada y trámite el mismo día.",
  group3Title: "Necesitas visa para Bolivia",
  group3Text:
    "Escríbenos por WhatsApp y te confirmamos los requisitos exactos para tramitar en Cusco.",
  guideLinkLabel: "Ver guía para tu nacionalidad",
  whatsappLabel: "Escríbenos por WhatsApp",
  unknownTitle: "Confirmemos tu caso",
  unknownText:
    "No encontramos tu país en nuestra lista. Escríbenos por WhatsApp con tu nacionalidad y fechas de viaje — te confirmamos en minutos si necesitas visa y cómo tramitarla.",
  consultPrompt: "¿No encuentras tu país en la lista?",
  consultCta: "Consúltanos por WhatsApp",
  consultWhatsappPrefill:
    "Hola, soy de [país] y no encontré mi país en el verificador de visa de su web. ¿Pueden confirmarme si necesito visa para Bolivia?",
  travelBannerTitle: "Planifica tu viaje a Bolivia",
  travelBannerText:
    "No necesitas visa para Bolivia. Reserva tours en Cusco y Bolivia directamente con Isabel.",
  travelWelcomeEyebrow: "Consulta de visa recibida",
  travelWelcomeTitle: "No necesitas visa para Bolivia",
  travelWelcomeCountry:
    "Tu pasaporte de {country} está en el Grupo I — es decir, no necesitas visa.",
  travelWelcomeBody:
    "Recibimos tu consulta y te transferimos aquí automáticamente. Aquí puedes reservar tours en Cusco y Bolivia con Isabel.",
  travelWelcomeNext: "Tours con Isabel a continuación",
};

const en: VisaCheckerCopy = {
  title: "Do you need a visa for Bolivia?",
  subtitle:
    "Type or choose your passport country. We'll tell you if you need a visa and what to do next.",
  countryLabel: "Passport country",
  countryPlaceholder: "Type or choose your country…",
  noResultsLabel: "No country found. Try another search or message us on WhatsApp.",
  submitLabel: "Check requirement",
  disclaimer:
    "Guidance based on Bolivia's official visa groups. Requirements can change.",
  groupsExplain: [
    {
      label: "Group I",
      text: "No visa needed. You can enter with a valid passport or ID.",
    },
    {
      label: "Group II",
      text: "You need a tourist visa before entering Bolivia.",
    },
    {
      label: "Group III",
      text: "You need a visa, with prior verification from Migration.",
    },
  ],
  group1Redirecting:
    "Good news — with a {country} passport you do not need a visa for Bolivia. Redirecting you to tours with Isabel…",
  group1RedirectEyebrow: "Your visa check result",
  group1RedirectTitle: "You don't need a visa",
  group1RedirectBody:
    "We're sending you to our travel section to book Cusco and Bolivia tours with Isabel.",
  group1RedirectProgress: "Redirecting you automatically…",
  group2Title: "You need a visa for Bolivia",
  group2Text:
    "You can process it in Cusco, across from the consulate, with personal guidance and same-day service.",
  group3Title: "You need a visa for Bolivia",
  group3Text:
    "Message us on WhatsApp and we'll confirm the exact requirements for processing in Cusco.",
  guideLinkLabel: "View guide for your nationality",
  whatsappLabel: "Message us on WhatsApp",
  unknownTitle: "Let's confirm your case",
  unknownText:
    "We couldn't find your country in our list. Message us on WhatsApp with your nationality and travel dates — we'll confirm if you need a visa and how to process it.",
  consultPrompt: "Can't find your country in the list?",
  consultCta: "Consult us on WhatsApp",
  consultWhatsappPrefill:
    "Hi, I'm from [country] and couldn't find my country on your visa checker. Can you confirm if I need a visa for Bolivia?",
  travelBannerTitle: "Plan your Bolivia trip",
  travelBannerText:
    "You don't need a visa for Bolivia. Book Cusco and Bolivia tours directly with Isabel.",
  travelWelcomeEyebrow: "Visa check received",
  travelWelcomeTitle: "You don't need a visa for Bolivia",
  travelWelcomeCountry:
    "Your {country} passport is in Group I — meaning you do not need a visa.",
  travelWelcomeBody:
    "We received your visa check and brought you here automatically. Here you can book Cusco and Bolivia tours with Isabel.",
  travelWelcomeNext: "Tours with Isabel below",
};

export const visaCheckerCopy: Record<Locale, VisaCheckerCopy> = {
  es,
  en,
  zh: zhVisaChecker,
  "zh-tw": zhTwVisaChecker,
  ar: arVisaChecker,
  he: heVisaChecker,
  pt: ptVisaChecker,
  ru: ruVisaChecker,
  id: idVisaChecker,
  uk: ukVisaChecker,
  sr: srVisaChecker,
  hi: hiVisaChecker,
};

export function getVisaCheckerCopy(locale: Locale): VisaCheckerCopy {
  return visaCheckerCopy[locale] ?? en;
}

export function fillVisaCheckerTemplate(template: string, country: string): string {
  return template.replaceAll("{country}", country);
}
