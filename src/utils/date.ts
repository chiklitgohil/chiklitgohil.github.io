/**
 * Formats a content date as e.g. "July 24, 2026".
 * Frontmatter dates are parsed as UTC midnight, so format in UTC too;
 * otherwise a build machine west of UTC would show the previous day.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
