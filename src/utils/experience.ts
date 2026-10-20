/**
 * Dynamically calculates total years and months of professional experience
 * from a start date to an end date or present date so the portfolio never goes stale.
 */

export interface ExperienceCalculation {
  years: number;
  months: number;
  totalMonths: number;
  formattedYears: string; // e.g. "5+ Years" or "5.5+ Years"
  fullLabel: string;      // e.g. "5+ Years Experience"
  detailedText: string;   // e.g. "5 yrs 7 mos" or "6 mos"
}

export function calculateExperience(
  startDateStr: string = '2021-03-01',
  endDateStr?: string
): ExperienceCalculation {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  // Format cleanly: e.g., if > 0.5 round to .5 or clean integer with '+'
  let formattedYears = `${years}+ Years`;
  if (years === 0) {
    formattedYears = `${months} ${months === 1 ? 'Month' : 'Months'}`;
  } else if (months >= 6) {
    formattedYears = `${years}.5+ Years`;
  }

  let detailedText = '';
  if (years > 0 && months > 0) {
    detailedText = `${years} yrs ${months} mos`;
  } else if (years > 0) {
    detailedText = `${years} yrs`;
  } else {
    detailedText = `${months} mos`;
  }

  return {
    years,
    months,
    totalMonths,
    formattedYears,
    fullLabel: `${formattedYears} Experience`,
    detailedText,
  };
}
