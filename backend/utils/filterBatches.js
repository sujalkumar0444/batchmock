/**
 * Apply search + status + centre filters to the batch list.
 * Empty search/status/centre values mean "no filter" (match all).
 */
function filterBatches(batches, { search = '', status = '', centre = '' }) {
  const normalizedSearch = search.trim().toLowerCase();
  const normalizedStatus = status.trim().toLowerCase();
  const normalizedCentre = centre.trim().toLowerCase();

  return batches.filter((batch) => {
    const matchesSearch =
      !normalizedSearch ||
      batch.batchCode.toLowerCase().includes(normalizedSearch) ||
      batch.course.toLowerCase().includes(normalizedSearch);

    const matchesStatus =
      !normalizedStatus || batch.status.toLowerCase() === normalizedStatus;

    const matchesCentre =
      !normalizedCentre || batch.centre.toLowerCase() === normalizedCentre;

    return matchesSearch && matchesStatus && matchesCentre;
  });
}

/**
 * Slice a filtered list into a single page.
 */
function paginate(items, page = 1, limit = 5) {
  const safeLimit = Math.max(1, Number(limit) || 5);
  const totalRecords = items.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / safeLimit));
  const safePage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const startIndex = (safePage - 1) * safeLimit;

  return {
    data: items.slice(startIndex, startIndex + safeLimit),
    pagination: {
      page: safePage,
      limit: safeLimit,
      totalRecords,
      totalPages,
    },
  };
}

module.exports = {
  filterBatches,
  paginate,
};
