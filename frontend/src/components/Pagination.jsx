import { getVisiblePages } from '../utils/getVisiblePages';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

function Pagination({ page, totalPages, totalRecords, limit, onPageChange }) {
  if (totalRecords === 0) {
    return null;
  }

  const visibleCount = Math.min(limit, totalRecords - (page - 1) * limit);
  const items = getVisiblePages(page, totalPages);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-row bg-white px-5 py-3.5">
      <p className="text-sm text-text-muted">
        Showing {visibleCount} of {totalRecords} batches
      </p>

      <div className="flex items-center gap-1.5">
        <NavButton
          label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </NavButton>

        {items.map((item, index) =>
          item === 'ellipsis' ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-8 w-8 items-center justify-center text-sm text-text-muted"
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                item === page
                  ? 'bg-accent text-white'
                  : 'border border-border-soft text-text-muted hover:bg-hover'
              }`}
            >
              {item}
            </button>
          )
        )}

        <NavButton
          label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </NavButton>
      </div>
    </div>
  );
}

function NavButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-border-soft text-text-muted disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:bg-hover"
    >
      {children}
    </button>
  );
}

export default Pagination;
