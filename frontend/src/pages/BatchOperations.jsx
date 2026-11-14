import BatchTable from '../components/BatchTable';
import Pagination from '../components/Pagination';
import SearchFilters from '../components/SearchFilters';
import Sidebar from '../components/Sidebar';
import useBatches from '../hooks/useBatches';

function BatchOperations() {
  const {
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
  } = useBatches();

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />

      <main className="flex-1 overflow-auto p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl font-bold text-text">Batch Operations</h1>
            <button
              type="button"
              className="rounded-lg border border-gold bg-gold-bg px-4 py-2 text-sm font-medium text-gold-text hover:bg-gold-hover"
            >
              + Create Batch
            </button>
          </header>

          <div className="mb-4">
            <SearchFilters
              search={search}
              status={status}
              centre={centre}
              centres={centres}
              onSearchChange={setSearch}
              onStatusChange={setStatus}
              onCentreChange={setCentre}
            />
          </div>

          <section className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
            <BatchTable batches={batches} loading={loading} error={error} />

            {!loading && !error && (
              <Pagination
                page={pagination.page}
                totalPages={pagination.totalPages}
                totalRecords={pagination.totalRecords}
                limit={pagination.limit}
                onPageChange={setPage}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default BatchOperations;
