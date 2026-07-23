import type { NationalityId } from "./nationalities";
import visaGroupsData from "./visa-groups.json";
import type { VisaCountryEntry, VisaGroup, VisaGroupsData } from "./visa-groups.types";

const data = visaGroupsData as VisaGroupsData;

export function getCountryByNationalityId(
  nationalityId: NationalityId,
): VisaCountryEntry | undefined {
  return data.countries.find((country) => country.nationalityId === nationalityId);
}

export function getVisaGroupByNationalityId(nationalityId: NationalityId): VisaGroup {
  return getCountryByNationalityId(nationalityId)?.group ?? 2;
}

export function getVisaGroupsSyncedAt(): string | null {
  return data.syncedAt;
}
