export const PAGE_LIMIT = 5;

export const SEARCH_DEBOUNCE_MS = 300;

export const STATUS_OPTIONS = [
  { value: '', label: 'All Status' },
  { value: 'Running', label: 'Running' },
  { value: 'Upcoming', label: 'Upcoming' },
  { value: 'Completed', label: 'Completed' },
];

export const STATUS_STYLES = {
  Running: 'bg-status-running-bg text-status-running',
  Upcoming: 'bg-status-upcoming-bg text-status-upcoming',
  Completed: 'bg-status-completed-bg text-status-completed',
};

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
