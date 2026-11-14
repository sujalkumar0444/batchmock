import { useCallback, useEffect, useState } from 'react';
import { PAGE_LIMIT, SEARCH_DEBOUNCE_MS } from '../constants';
import { fetchBatches, fetchCentres } from '../services/batchService';

/**
 * Encapsulates batch list state: search, filters, pagination, and API calls.
 */
function useBatches() {
  const [batches, setBatches] = useState([]);
  const [centres, setCentres] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: PAGE_LIMIT,
    totalRecords: 0,
    totalPages: 1,
  });

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [status, setStatus] = useState('');
  const [centre, setCentre] = useState('');
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounce search input; reset to first page when the query settles
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [search]);

  // Reset to first page when filters change
  useEffect(() => {
    setPage(1);
  }, [status, centre]);

  useEffect(() => {
    let cancelled = false;

    const loadCentres = async () => {
      try {
        const response = await fetchCentres();
        if (!cancelled && response.success) {
          setCentres(response.data);
        }
      } catch {
        // Dropdown can remain empty; batch list still works
      }
    };

    loadCentres();
    return () => {
      cancelled = true;
    };
  }, []);

  const loadBatches = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchBatches({
        page,
        limit: PAGE_LIMIT,
        search: debouncedSearch,
        status,
        centre,
      });

      if (response.success) {
        setBatches(response.data);
        setPagination(response.pagination);
      } else {
        setBatches([]);
        setError('Failed to load batches.');
      }
    } catch {
      setBatches([]);
      setError('Unable to reach the server. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch, status, centre]);

  useEffect(() => {
    loadBatches();
  }, [loadBatches]);

  return {
    batches,
    centres,
    pagination,
    search,
    status,
    centre,
    loading,
    error,
    setSearch,
    setStatus,
    setCentre,
    setPage,
  };
}

export default useBatches;
