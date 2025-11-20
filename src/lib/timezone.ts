/**
 * Timezone configuration for Wesley's CPR (Fresno, CA)
 * All times are displayed and processed in Pacific Time (America/Los_Angeles)
 */

export const TIMEZONE = 'America/Los_Angeles';

/**
 * Format a date in Pacific Time
 * @param date - Date object or ISO string
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string in Pacific Time
 */
export function formatInPacificTime(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    timeZone: TIMEZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    ...options,
    timeZone: TIMEZONE,
  }).format(dateObj);
}

/**
 * Get Pacific Time abbreviation (PT/PST/PDT)
 * @param date - Optional date to check (defaults to now)
 * @returns Timezone abbreviation string
 */
export function getPacificTimeAbbreviation(date: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    timeZoneName: 'short',
  });

  const parts = formatter.formatToParts(date);
  const tzName = parts.find(part => part.type === 'timeZoneName')?.value || 'PT';
  return tzName;
}

