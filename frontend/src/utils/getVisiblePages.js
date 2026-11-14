/**
 * Builds a compact pagination sequence with ellipses.
 * Shows all pages when there are 5 or fewer (matches the reference UI).
 * Beyond that, always keeps first + last visible and inserts "...".
 *
 * Examples (siblingCount = 1):
 *   page 1 of 6   → [1, 2, 3, 'ellipsis', 6]
 *   page 4 of 6   → [1, 'ellipsis', 3, 4, 5, 'ellipsis', 6]
 *   page 6 of 6   → [1, 'ellipsis', 4, 5, 6]
 *   page 2 of 5   → [1, 2, 3, 4, 5]
 *
 * @returns {Array<number | 'ellipsis'>}
 */
export function getVisiblePages(currentPage, totalPages, siblingCount = 1) {
  if (totalPages <= 5) {
    return range(1, totalPages);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  // Near the start: 1 2 3 ... last
  if (!showLeftEllipsis && showRightEllipsis) {
    return [...range(1, 3), 'ellipsis', totalPages];
  }

  // Near the end: 1 ... n-2 n-1 n
  if (showLeftEllipsis && !showRightEllipsis) {
    return [1, 'ellipsis', ...range(totalPages - 2, totalPages)];
  }

  // In the middle: 1 ... c-1 c c+1 ... last
  return [1, 'ellipsis', ...range(leftSibling, rightSibling), 'ellipsis', totalPages];
}

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
