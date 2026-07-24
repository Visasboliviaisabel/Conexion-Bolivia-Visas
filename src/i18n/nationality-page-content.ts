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
import type { NationalityContent } from "./nationality-translations";
import { getNationalityPageTemplates } from "./nationality-page-templates";
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

function fill(template: string, countryName: string): string {
  return fillVisaCheckerTemplate(template, countryName);
}

function buildVisaFaq(
  locale: Locale,
  countryName: string,
  answer: string,
): { q: string; a: string } {
  const templates = getNationalityPageTemplates(locale);
  return {
    q: fill(templates.visaFaqQuestion, countryName),
    a: answer,
  };
}

function buildGroup1Content(
  locale: Locale,
  countryName: string,
  groupLabel: string,
  groupExplain: string,
  travelPageHref: string,
  syncedAt: string | null,
): NationalityPageContent {
  const copy = getVisaCheckerCopy(locale);
  const templates = getNationalityPageTemplates(locale);

  return {
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
    processTitle: templates.processTitle,
    processSteps: templates.processSteps,
    whyCuscoTitle: templates.whyCuscoTitle,
    whyCusco: templates.whyCusco,
    faqTitle: templates.faqTitle,
    faqs: [
      buildVisaFaq(locale, countryName, groupExplain),
      {
        q: templates.travelFaqQuestion,
        a: templates.travelFaqAnswer,
      },
    ],
    ctaTitle: copy.travelBannerTitle,
    ctaText: copy.travelBannerText,
    relatedTitle: templates.relatedTitle,
  };
}

function buildVisaRequiredContent(
  locale: Locale,
  countryName: string,
  group: 2 | 3,
  groupLabel: string,
  groupExplain: string,
  travelPageHref: string,
  syncedAt: string | null,
): NationalityPageContent {
  const copy = getVisaCheckerCopy(locale);
  const templates = getNationalityPageTemplates(locale);
  const groupText = group === 3 ? copy.group3Text : copy.group2Text;
  const visaAnswer = `${groupExplain} ${groupText}`;

  return {
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
    requirementsTitle: fill(templates.visaRequirementsTitle, countryName),
    requirements: templates.visaRequirements,
    processTitle: templates.processTitle,
    processSteps: templates.processSteps,
    whyCuscoTitle: templates.whyCuscoTitle,
    whyCusco: templates.whyCusco,
    faqTitle: templates.faqTitle,
    faqs: [buildVisaFaq(locale, countryName, visaAnswer), ...templates.extraFaqs],
    ctaTitle: templates.ctaTitleVisa,
    ctaText: templates.ctaTextVisa,
    relatedTitle: templates.relatedTitle,
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
  const travelPageHref = localePath(locale, "tours");
  const syncedAt = getVisaGroupsSyncedAt();

  if (group === 1) {
    return buildGroup1Content(
      locale,
      countryName,
      groupInfo.label,
      groupInfo.text,
      travelPageHref,
      syncedAt,
    );
  }

  return buildVisaRequiredContent(
    locale,
    countryName,
    group,
    groupInfo.label,
    groupInfo.text,
    travelPageHref,
    syncedAt,
  );
}
