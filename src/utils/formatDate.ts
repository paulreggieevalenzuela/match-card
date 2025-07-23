export function formatDate(dateString: string): string {
  // Remove trailing period if present
  const clean = dateString.replace(/\.$/, '');

  // Split by dots and build a Date object: [day, month, year]
  const [day, month, year] = clean.split('.').map(Number);

  const date = new Date(year, month - 1, day); // month is 0-based

  // Format to "Aug 7th"
  const options = { month: 'short' } as const;
  const monthName = new Intl.DateTimeFormat('en-US', options).format(date);
  const dayWithSuffix = getOrdinal(day);

  return `${monthName} ${dayWithSuffix}`;
}

// Helper to get "1st", "2nd", "3rd", etc.
export function getOrdinal(day: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const value = day % 100;
  return (
    day +
    (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
  );
}