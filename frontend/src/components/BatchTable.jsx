import { formatDate } from '../utils/formatDate';
import { KebabIcon } from './icons';
import StatusBadge from './StatusBadge';

const TABLE_HEADERS = [
  'Batch Code',
  'Course',
  'Center',
  'Start Date',
  'Capacity',
  'Status',
  'Actions',
];

function BatchTable({ batches, loading, error }) {
  if (loading) {
    return <TableMessage>Loading batches...</TableMessage>;
  }

  if (error) {
    return <TableMessage tone="error">{error}</TableMessage>;
  }

  if (!batches.length) {
    return <TableMessage>No matching batches found.</TableMessage>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] text-left">
        <thead>
          <tr className="border-b border-row bg-header">
            {TABLE_HEADERS.map((header) => (
              <th
                key={header}
                className="px-5 py-3.5 text-xs font-semibold tracking-wide text-text-faint uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr key={batch.id} className="border-b border-row last:border-b-0 hover:bg-hover">
              <td className="px-5 py-4 text-sm font-medium text-text-body">{batch.batchCode}</td>
              <td className="px-5 py-4 text-sm text-text-secondary">{batch.course}</td>
              <td className="px-5 py-4 text-sm text-text-secondary">{batch.centre}</td>
              <td className="px-5 py-4 text-sm text-text-secondary">{formatDate(batch.startDate)}</td>
              <td className="px-5 py-4 text-sm text-text-secondary">
                {batch.enrolled}/{batch.capacity}
              </td>
              <td className="px-5 py-4">
                <StatusBadge status={batch.status} />
              </td>
              <td className="px-5 py-4">
                <button
                  type="button"
                  aria-label={`Actions for ${batch.batchCode}`}
                  className="rounded p-1 text-text-faint hover:bg-hover-deep hover:text-text-body"
                >
                  <KebabIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableMessage({ children, tone = 'default' }) {
  const toneClass = tone === 'error' ? 'bg-red-50 text-red-600' : 'text-text-muted';

  return (
    <div className={`flex min-h-[280px] items-center justify-center ${toneClass}`}>
      <p className="text-sm">{children}</p>
    </div>
  );
}

export default BatchTable;
