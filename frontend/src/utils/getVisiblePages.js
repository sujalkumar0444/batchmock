/**
 * Returns a compact window of page numbers around the current page.
 * Keeps the pagination control readable when totalPages grows.
 *
 * Example (current=4, total=10, window=5): [2, 3, 4, 5, 6]
 */
export function getVisiblePages(currentPage, totalPages, windowSize = 5) {
  if (totalPages <= windowSize) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, currentPage - half);
  let end = start + windowSize - 1;

  if (end > totalPages) {
    end = totalPages;
    start = end - windowSize + 1;
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
