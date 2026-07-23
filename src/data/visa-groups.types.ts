import type { NationalityId } from "./nationalities";

export type VisaGroup = 1 | 2 | 3;

export type VisaCountryEntry = {
  code: string;
  nameEn: string;
  nameEs: string;
  group: VisaGroup;
  nationalityId?: NationalityId;
};

export type VisaGroupsData = {
  syncedAt: string | null;
  lastReviewed: string;
  officialSourceUrl: string;
  countries: VisaCountryEntry[];
};
