import Link from "next/link";
import {
  Rocket,
  LayoutDashboard,
  Users,
  MessageSquare,
  User,
  Settings,
  Bell,
  Search,
} from "lucide-react";

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/discover",
    label: "Discover",
    icon: Search,
  },
  {
    href: "/dashboard/matches",
    label: "My Matches",
    icon: Users,
  },
  {
    href: "/dashboard/messages",
    label: "Messages",
    icon: MessageSquare,
  },
  {
    href: "/dashboard/profile",
    label: "My Profile",
    icon: User,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col fixed inset-y-0 left-0 z-50">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 font-plus-jakarta text-lg">
              FounderConnect
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-violet-50 hover:text-violet-700 transition-colors group"
              >
                <Icon className="w-5 h-5 group-hover:text-violet-600 transition-colors" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-gray-100 space-y-1">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">Settings</span>
          </Link>
          {/* User avatar placeholder */}
          <div className="flex items-center gap-3 px-3 py-2.5 mt-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
              U
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Your Name
              </p>
              <p className="text-xs text-gray-500 truncate">Founder</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search founders, skills, interests..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              U
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
