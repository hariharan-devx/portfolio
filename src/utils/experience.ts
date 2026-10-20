/**
 * Dynamically calculates total years and months of professional experience
 * from March 2021 to the present date so the portfolio never goes stale.
 */

export interface ExperienceCalculation {
  years: number;
  months: number;
  totalMonths: number;
  formattedYears: string; // e.g. "5+ Years" or "5.5+ Years"
  fullLabel: string;      // e.g. "5+ Years Experience"
  detailedText: string;   // e.g. "5 yrs 7 mos"
}

export function calculateExperience(startDateStr: string = '2021-03-01'): ExperienceCalculation {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  // Format cleanly: e.g., if > 0.5 round to .5 or clean integer with '+'
  let formattedYears = `${years}+ Years`;
  if (months >= 6) {
    formattedYears = `${years}.5+ Years`;
  }

  return {
    years,
    months,
    totalMonths,
    formattedYears,
    fullLabel: `${formattedYears} Experience`,
    detailedText: `${years} yrs ${months} mos`,
  };
}
