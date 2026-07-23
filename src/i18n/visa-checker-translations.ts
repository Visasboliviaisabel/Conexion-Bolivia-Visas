import type { Locale } from "./config";

export type VisaCheckerCopy = {
  title: string;
  subtitle: string;
  countryLabel: string;
  countryPlaceholder: string;
  noResultsLabel: string;
  submitLabel: string;
  disclaimer: string;
  officialLinkLabel: string;
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
  officialLinkLabel: "Ver fuente oficial",
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
    "Buenas noticias: con tu pasaporte de {country} no necesitas visa para Bolivia. Redirigiendo a información de viajes y tours…",
  group1RedirectEyebrow: "Resultado de tu consulta",
  group1RedirectTitle: "No necesitas visa",
  group1RedirectBody:
    "Te llevamos a nuestra sección de viajes, con información turística y tours.",
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
    "No necesitas visa para Bolivia. Aquí encontrarás información de viaje, consejos y tours para Cusco y Bolivia.",
  travelWelcomeEyebrow: "Consulta de visa recibida",
  travelWelcomeTitle: "No necesitas visa para Bolivia",
  travelWelcomeCountry:
    "Tu pasaporte de {country} está en el Grupo I — es decir, no necesitas visa.",
  travelWelcomeBody:
    "Recibimos tu consulta y te transferimos aquí automáticamente. En esta página puedes conocer más sobre información de viaje y tours para Cusco y Bolivia.",
  travelWelcomeNext: "Información de viaje y tours a continuación",
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
  officialLinkLabel: "View official source",
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
    "Good news — with a {country} passport you do not need a visa for Bolivia. Redirecting you to travel info and tours…",
  group1RedirectEyebrow: "Your visa check result",
  group1RedirectTitle: "You don't need a visa",
  group1RedirectBody:
    "We're sending you to our travel section with trip information and tours.",
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
    "You don't need a visa for Bolivia. Here you'll find travel information, tips, and tours for Cusco and Bolivia.",
  travelWelcomeEyebrow: "Visa check received",
  travelWelcomeTitle: "You don't need a visa for Bolivia",
  travelWelcomeCountry:
    "Your {country} passport is in Group I — meaning you do not need a visa.",
  travelWelcomeBody:
    "We received your visa check and brought you here automatically. On this page you can learn more about travel information and tours for Cusco and Bolivia.",
  travelWelcomeNext: "Travel info and tours below",
};

export const visaCheckerCopy: Record<Locale, VisaCheckerCopy> = {
  es,
  en,
  zh: en,
  "zh-tw": en,
  ar: en,
  he: en,
  pt: {
    ...en,
    title: "Você precisa de visto para a Bolívia?",
    subtitle:
      "Selecione o país do seu passaporte. Informamos se você precisa de visto e qual é o próximo passo.",
    countryLabel: "País do passaporte",
    countryPlaceholder: "Escolha ou digite seu país…",
    noResultsLabel: "País não encontrado. Tente outra busca ou fale conosco no WhatsApp.",
    submitLabel: "Verificar requisito",
    groupsExplain: [
      {
        label: "Grupo I",
        text: "Não precisa de visto. Entrada com passaporte ou documento válido.",
      },
      {
        label: "Grupo II",
        text: "Precisa de visto de turismo antes de entrar na Bolívia.",
      },
      {
        label: "Grupo III",
        text: "Precisa de visto, com verificação prévia da Migração.",
      },
    ],
    group1RedirectBody:
      "Vamos levá-lo à nossa seção de viagens, com informações turísticas e tours.",
    group2Title: "Você precisa de visto para a Bolívia",
    group3Title: "Você precisa de visto para a Bolívia",
    whatsappLabel: "Fale conosco no WhatsApp",
    consultPrompt: "Não encontrou seu país na lista?",
    consultCta: "Consulte-nos no WhatsApp",
    consultWhatsappPrefill:
      "Olá, sou de [país] e não encontrei meu país no verificador de visto. Podem confirmar se preciso de visto para a Bolívia?",
    travelBannerTitle: "Planeje sua viagem à Bolívia",
    travelWelcomeEyebrow: "Consulta de visto recebida",
    travelWelcomeTitle: "Você não precisa de visto para a Bolívia",
    travelWelcomeCountry:
      "Seu passaporte de {country} está no Grupo I — ou seja, você não precisa de visto.",
    travelWelcomeBody:
      "Recebemos sua consulta e trouxemos você aqui automaticamente. Nesta página você encontra informações de viagem e tours para Cusco e a Bolívia.",
    travelWelcomeNext: "Informações de viagem e tours abaixo",
  },
  ru: en,
  id: en,
  uk: en,
  sr: en,
  hi: en,
};

export function getVisaCheckerCopy(locale: Locale): VisaCheckerCopy {
  return visaCheckerCopy[locale] ?? en;
}

export function fillVisaCheckerTemplate(template: string, country: string): string {
  return template.replaceAll("{country}", country);
}

export function formatLastReviewed(date: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "es" ? "es-PE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(`${date}T12:00:00`));
  } catch {
    return date;
  }
}
