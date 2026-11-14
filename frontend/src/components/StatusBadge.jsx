const STATUS_STYLES = {
  Running: 'bg-status-running-bg text-status-running',
  Upcoming: 'bg-status-upcoming-bg text-status-upcoming',
  Completed: 'bg-status-completed-bg text-status-completed',
};

function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || 'bg-gray-100 text-gray-600';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export default StatusBadge;
