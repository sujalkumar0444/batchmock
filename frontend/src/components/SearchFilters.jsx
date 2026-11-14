import { STATUS_OPTIONS } from '../constants';
import { FilterIcon, SearchIcon } from './icons';

const selectClassName =
  'min-w-36 rounded-lg border border-border-soft bg-white px-3 py-2.5 text-sm text-text-body outline-none focus:border-gold focus:ring-1 focus:ring-gold';

function SearchFilters({
  search,
  status,
  centre,
  centres,
  onSearchChange,
  onStatusChange,
  onCentreChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-white p-3 shadow-sm">
      <div className="relative min-w-56 flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-icon-muted">
          <SearchIcon className="h-4 w-4" />
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by Batch Code or Course"
          className="w-full rounded-lg border border-border-soft bg-panel py-2.5 pr-3 pl-9 text-sm text-text-body outline-none placeholder:text-placeholder focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className={selectClassName}
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={centre}
        onChange={(e) => onCentreChange(e.target.value)}
        className={selectClassName}
      >
        <option value="">All Centres</option>
        {centres.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button
        type="button"
        aria-label="Filters"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft bg-white text-text-muted hover:bg-hover"
      >
        <FilterIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export default SearchFilters;
