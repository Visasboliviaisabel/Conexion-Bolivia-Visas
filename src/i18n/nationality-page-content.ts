import type { NationalityId } from "../data/nationalities";
import { getNationalityLabel } from "../data/nationalities";
import {
  getCountryByNationalityId,
  getVisaGroupsSyncedAt,
} from "../data/visa-groups-lookup";
import type { VisaGroup } from "../data/visa-groups.types";
import { getCountryDisplayName } from "./country-display-names";
import type { Locale } from "./config";
import { localePath } from "./config";
import {
  getNationalityContent,
  type NationalityContent,
} from "./nationality-translations";
import {
  fillVisaCheckerTemplate,
  getVisaCheckerCopy,
} from "./visa-checker-translations";

export type NationalityPageContent = NationalityContent & {
  group: VisaGroup;
  countryName: string;
  groupLabel: string;
  groupExplain: string;
  showVisaProcess: boolean;
  travelPageHref: string;
  syncedAt: string | null;
};

type PageTemplates = {
  metaTitleTravel: string;
  metaTitleVisa: string;
  entryRequirementsTitle: string;
  entryRequirements: string[];
  visaFaqQuestion: string;
  cuscoPitch: string;
  travelFaqQuestion: string;
  travelFaqAnswer: string;
};

const pageTemplates: Record<"es" | "en", PageTemplates> = {
  es: {
    metaTitleTravel: "Viaje a Bolivia — {country} | Conexión Bolivia",
    metaTitleVisa: "Visa Bolivia — {country} | Conexión Bolivia",
    entryRequirementsTitle: "Requisitos de entrada para ciudadanos de {country}",
    entryRequirements: [
      "Pasaporte vigente (mínimo 6 meses de validez)",
      "Certificado de vacuna contra fiebre amarilla (requerido para Bolivia)",
      "Itinerario de viaje o reservas de vuelo",
      "Comprobante de alojamiento o reserva de hotel",
    ],
    visaFaqQuestion: "¿Los ciudadanos de {country} necesitan visa para Bolivia?",
    cuscoPitch:
      "Si pasas por Cusco rumbo al Salar de Uyuni o el altiplano boliviano, podemos orientarte sobre tu cruce y opciones de viaje.",
    travelFaqQuestion: "Voy al Salar de Uyuni — ¿qué necesito antes de cruzar a Bolivia?",
    travelFaqAnswer:
      "Con pasaporte vigente y los requisitos de entrada oficiales puedes cruzar sin visa. Escríbenos si quieres orientación sobre el cruce desde Cusco.",
  },
  en: {
    metaTitleTravel: "Bolivia Travel — {country} | Conexión Bolivia",
    metaTitleVisa: "Bolivia Visa — {country} | Conexión Bolivia",
    entryRequirementsTitle: "Entry requirements for {country} citizens",
    entryRequirements: [
      "Valid passport (minimum 6 months validity)",
      "Yellow fever vaccination certificate (required for Bolivia)",
      "Travel itinerary or flight reservations",
      "Proof of accommodation or hotel booking",
    ],
    visaFaqQuestion: "Do {country} citizens need a visa for Bolivia?",
    cuscoPitch:
      "If you're traveling through Cusco on your way to Salar de Uyuni or the Bolivian altiplano, we can help with border guidance and travel options.",
    travelFaqQuestion: "I'm going to Salar de Uyuni — what do I need before crossing into Bolivia?",
    travelFaqAnswer:
      "With a valid passport and the official entry requirements, you can cross without a visa. Message us if you'd like guidance on crossing from Cusco.",
  },
};

function getPageTemplates(locale: Locale): PageTemplates {
  if (locale === "es") return pageTemplates.es;
  return pageTemplates.en;
}

function fill(template: string, countryName: string): string {
  return fillVisaCheckerTemplate(template, countryName);
}

function buildVisaFaq(
  locale: Locale,
  countryName: string,
  answer: string,
): { q: string; a: string } {
  const templates = getPageTemplates(locale);
  return {
    q: fill(templates.visaFaqQuestion, countryName),
    a: answer,
  };
}

function buildGroup1Content(
  locale: Locale,
  base: NationalityContent,
  countryName: string,
  groupLabel: string,
  groupExplain: string,
  travelPageHref: string,
  syncedAt: string | null,
): NationalityPageContent {
  const copy = getVisaCheckerCopy(locale);
  const templates = getPageTemplates(locale);

  return {
    ...base,
    group: 1,
    countryName,
    groupLabel,
    groupExplain,
    showVisaProcess: false,
    travelPageHref,
    syncedAt,
    meta: {
      title: fill(templates.metaTitleTravel, countryName),
      description: copy.travelBannerText,
    },
    eyebrow: `${countryName} → Bolivia`,
    title: copy.travelWelcomeTitle,
    subtitle: groupExplain,
    intro: `${fill(copy.travelWelcomeCountry, countryName)} ${copy.travelWelcomeBody}`,
    requirementsTitle: fill(templates.entryRequirementsTitle, countryName),
    requirements: templates.entryRequirements,
    faqs: [
      buildVisaFaq(locale, countryName, groupExplain),
      {
        q: templates.travelFaqQuestion,
        a: templates.travelFaqAnswer,
      },
    ],
    ctaTitle: copy.travelBannerTitle,
    ctaText: copy.travelBannerText,
  };
}

function buildVisaRequiredContent(
  locale: Locale,
  base: NationalityContent,
  countryName: string,
  group: 2 | 3,
  groupLabel: string,
  groupExplain: string,
  travelPageHref: string,
  syncedAt: string | null,
): NationalityPageContent {
  const copy = getVisaCheckerCopy(locale);
  const templates = getPageTemplates(locale);
  const groupText = group === 3 ? copy.group3Text : copy.group2Text;
  const visaAnswer = `${groupExplain} ${groupText}`;

  return {
    ...base,
    group,
    countryName,
    groupLabel,
    groupExplain,
    showVisaProcess: true,
    travelPageHref,
    syncedAt,
    meta: {
      title: fill(templates.metaTitleVisa, countryName),
      description: `${groupExplain} ${groupText}`,
    },
    eyebrow: `${countryName} → Bolivia`,
    title: group === 3 ? copy.group3Title : copy.group2Title,
    subtitle: groupText,
    intro: `${groupExplain} ${groupText} ${templates.cuscoPitch}`,
    faqs: [buildVisaFaq(locale, countryName, visaAnswer), ...base.faqs.slice(1)],
    ctaTitle: base.ctaTitle,
    ctaText: base.ctaText,
  };
}

export function getNationalityPageContent(
  locale: Locale,
  nationalityId: NationalityId,
): NationalityPageContent {
  const entry = getCountryByNationalityId(nationalityId);
  const group = entry?.group ?? 2;
  const countryName = entry
    ? getCountryDisplayName(locale, entry.code, entry)
    : getNationalityLabel(nationalityId, locale);
  const copy = getVisaCheckerCopy(locale);
  const groupInfo = copy.groupsExplain[group - 1];
  const base = getNationalityContent(locale, nationalityId);
  const travelPageHref = localePath(locale, "tours");
  const syncedAt = getVisaGroupsSyncedAt();

  if (group === 1) {
    return buildGroup1Content(
      locale,
      base,
      countryName,
      groupInfo.label,
      groupInfo.text,
      travelPageHref,
      syncedAt,
    );
  }

  return buildVisaRequiredContent(
    locale,
    base,
    countryName,
    group,
    groupInfo.label,
    groupInfo.text,
    travelPageHref,
    syncedAt,
  );
}
