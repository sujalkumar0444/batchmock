/** Records shown per page in the batch table. */
export const PAGE_LIMIT = 5;

/** Debounce delay (ms) for the search input. */
export const SEARCH_DEBOUNCE_MS = 300;

/** Status filter options shown in the dropdown. */
export const STATUS_OPTIONS = [
  { value: '', label: 'All Status' },
  { value: 'Running', label: 'Running' },
  { value: 'Upcoming', label: 'Upcoming' },
  { value: 'Completed', label: 'Completed' },
];

/** Tailwind classes for status pills — extend here when adding a new status. */
export const STATUS_STYLES = {
  Running: 'bg-status-running-bg text-status-running',
  Upcoming: 'bg-status-upcoming-bg text-status-upcoming',
  Completed: 'bg-status-completed-bg text-status-completed',
};

/** Sidebar navigation items (UI only). */
export const NAV_ITEMS = [
  { id: 'franchise', label: 'Franchise Management' },
  { id: 'students', label: 'Student Management' },
  { id: 'lms', label: 'LMS' },
  { id: 'finance', label: 'Finance' },
  { id: 'hrms', label: 'HRMS' },
  { id: 'centers', label: 'Centers' },
  { id: 'assets', label: 'Assets' },
  { id: 'support', label: 'Support' },
];
