import Link from "next/link";
import {
  Users,
  MessageSquare,
  TrendingUp,
  Zap,
  ArrowRight,
  Star,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const statsCards = [
  {
    label: "New Matches",
    value: "7",
    delta: "+3 this week",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    textColor: "text-violet-700",
  },
  {
    label: "Active Conversations",
    value: "4",
    delta: "2 unread",
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    textColor: "text-indigo-700",
  },
  {
    label: "Profile Views",
    value: "142",
    delta: "+28 this week",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    textColor: "text-pink-700",
  },
  {
    label: "Match Score",
    value: "91%",
    delta: "Top 8% of profiles",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    textColor: "text-amber-700",
  },
];

const recentMatches = [
  {
    id: 1,
    name: "Alex Kim",
    role: "Product Designer",
    skills: ["UI/UX", "Figma", "User Research"],
    score: 94,
    avatar: "AK",
    color: "from-violet-400 to-purple-500",
    idea: "EdTech SaaS for remote teams",
    time: "2h ago",
    status: "new",
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "Growth Marketer",
    skills: ["GTM Strategy", "Paid Ads", "SEO"],
    score: 88,
    avatar: "JL",
    color: "from-indigo-400 to-blue-500",
    idea: "B2B marketing automation",
    time: "5h ago",
    status: "new",
  },
  {
    id: 3,
    name: "Taylor Nguyen",
    role: "ML Engineer",
    skills: ["Python", "LLMs", "Data Pipelines"],
    score: 85,
    avatar: "TN",
    color: "from-emerald-400 to-teal-500",
    idea: "AI-native analytics platform",
    time: "1d ago",
    status: "viewed",
  },
];

const recentMessages = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    color: "from-pink-400 to-rose-500",
    preview: "That's a great point about the enterprise market. Have you thought about...",
    time: "10m ago",
    unread: 2,
  },
  {
    id: 2,
    name: "Marcus Rivera",
    avatar: "MR",
    color: "from-blue-400 to-indigo-500",
    preview: "I'd love to jump on a call this week. I've been thinking about your idea...",
    time: "1h ago",
    unread: 0,
  },
  {
    id: 3,
    name: "Priya Nair",
    avatar: "PN",
    color: "from-amber-400 to-orange-500",
    preview: "Sent you my deck. Let me know what you think about the go-to-market slide.",
    time: "3h ago",
    unread: 1,
  },
];

const suggestedActions = [
  {
    icon: CheckCircle2,
    text: "Complete your profile to get 3x more matches",
    action: "Complete profile",
    href: "/dashboard/profile",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Star,
    text: "Add 2 more skills to improve match quality",
    action: "Add skills",
    href: "/dashboard/profile#skills",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Clock,
    text: "Set your availability to let matches know when to connect",
    action: "Set availability",
    href: "/dashboard/settings",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-plus-jakarta">
            Welcome back 👋
          </h1>
          <p className="text-gray-500 mt-1">
            You have <span className="font-semibold text-violet-600">7 new matches</span> since your last visit.
          </p>
        </div>
        <Link
          href="/dashboard/discover"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-md hover:shadow-violet-200 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          Discover founders
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">{card.label}</p>
                <div className={`w-9 h-9 ${card.bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${card.textColor}`} />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 font-plus-jakarta mb-1">
                {card.value}
              </p>
              <p className={`text-xs font-medium ${card.textColor}`}>
                {card.delta}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Matches */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <div>
              <h2 className="font-bold text-gray-900 font-plus-jakarta">
                New Matches
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Based on your skills and interests
              </p>
            </div>
            <Link
              href="/dashboard/matches"
              className="text-sm font-medium text-violet-600 hover:text-violet-700 flex items-center gap-1"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentMatches.map((match) => (
              <div
                key={match.id}
                className="p-5 hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${match.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {match.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 text-sm">
                          {match.name}
                        </p>
                        {match.status === "new" && (
                          <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium">
                            New
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="text-sm font-bold text-gray-700">
                          {match.score}%
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{match.role}</p>
                    <p className="text-sm text-gray-600 mb-3 truncate">
                      Building: {match.idea}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {match.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                        <button className="text-xs font-medium text-violet-600 hover:text-violet-700 border border-violet-200 px-3 py-1 rounded-lg hover:bg-violet-50 transition-colors">
                          Message
                        </button>
                        <Link
                          href={`/dashboard/profile/${match.id}`}
                          className="text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Recent Messages */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between p-5 border-b border-gray-50">
              <h2 className="font-bold text-gray-900 font-plus-jakarta">
                Messages
              </h2>
              <Link
                href="/dashboard/messages"
                className="text-sm font-medium text-violet-600 hover:text-violet-700 flex items-center gap-1"
              >
                All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {recentMessages.map((msg) => (
                <Link
                  key={msg.id}
                  href={`/dashboard/messages/${msg.id}`}
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${msg.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {msg.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-sm font-semibold text-gray-900">
                        {msg.name}
                      </p>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{msg.preview}</p>
                  </div>
                  {msg.unread > 0 && (
                    <span className="w-5 h-5 bg-violet-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {msg.unread}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Suggested actions */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="p-5 border-b border-gray-50">
              <h2 className="font-bold text-gray-900 font-plus-jakarta">
                Improve your matches
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {suggestedActions.map((action) => {
                const Icon = action.icon;
                return (
                  <div
                    key={action.text}
                    className={`flex items-start gap-3 p-3 ${action.bg} rounded-xl`}
                  >
                    <Icon className={`w-5 h-5 ${action.color} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-700 mb-1">{action.text}</p>
                      <Link
                        href={action.href}
                        className={`text-xs font-semibold ${action.color} hover:underline`}
                      >
                        {action.action} →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
