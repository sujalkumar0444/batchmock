import { NAV_ITEMS } from '../constants';
import {
  BadgeIcon,
  BookIcon,
  BoxIcon,
  BuildingIcon,
  HeadsetIcon,
  LogoutIcon,
  MapPinIcon,
  UsersIcon,
  WalletIcon,
} from './icons';

const NAV_ICONS = {
  franchise: BuildingIcon,
  students: UsersIcon,
  lms: BookIcon,
  finance: WalletIcon,
  hrms: BadgeIcon,
  centers: MapPinIcon,
  assets: BoxIcon,
  support: HeadsetIcon,
};

function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
      <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICONS[item.id];
          const isActive = item.id === 'franchise';

          return (
            <button
              key={item.id}
              type="button"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                isActive
                  ? 'bg-accent-soft font-medium text-accent-text'
                  : 'text-text-muted hover:bg-hover-deep'
              }`}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-logout-from to-logout-to px-4 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          <LogoutIcon className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
