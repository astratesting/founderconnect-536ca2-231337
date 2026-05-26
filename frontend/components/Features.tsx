import {
  Brain,
  MessageSquare,
  ShieldCheck,
  Sliders,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Complementary Skills Matching",
    description:
      "Our algorithm scores how well your skills and gaps align with each founder. A technical founder gets matched with business-focused partners, not more engineers.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    highlight: "AI-powered scoring",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Messaging",
    description:
      "Message your matches directly in-platform. No email awkwardness, no LinkedIn cold DMs. Conversations stay organized alongside match context.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    highlight: "Built-in chat",
  },
  {
    icon: ShieldCheck,
    title: "Verified Founder Profiles",
    description:
      "Sign in with GitHub or Google. Profiles show real work history, GitHub contributions, and linked portfolio — not just self-reported claims.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    highlight: "OAuth verified",
  },
  {
    icon: Sliders,
    title: "Smart Filters & Discovery",
    description:
      "Filter by industry, startup stage, location, time commitment, and equity expectations. Find founders who match your practical constraints, not just your vision.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    highlight: "Precision filtering",
  },
  {
    icon: Users,
    title: "Shared Interest Signals",
    description:
      "Beyond skills, we match on what you actually care about: your target industries, working style, risk appetite, and what kind of company you want to build.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    highlight: "Culture alignment",
  },
  {
    icon: Zap,
    title: "Match Score Transparency",
    description:
      "Every match comes with a detailed breakdown: which skills complement, which interests align, and which areas need discussion. No black-box matching.",
    color: "from-cyan-500 to-sky-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    highlight: "Explainable scores",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Platform features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-plus-jakarta mb-6">
            Everything you need to find{" "}
            <span className="gradient-text">the right co-founder</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            FounderConnect isn&apos;t a directory — it&apos;s a matching engine.
            Every feature is built to surface genuine compatibility, not just
            who looked at your profile.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50/0 to-indigo-50/0 group-hover:from-violet-50/50 group-hover:to-indigo-50/30 transition-all duration-200 pointer-events-none" />

                <div className="relative">
                  {/* Icon + highlight badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <span
                      className={`text-xs font-semibold ${feature.iconColor} ${feature.bg} px-2.5 py-1 rounded-full`}
                    >
                      {feature.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 font-plus-jakarta mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom comparison banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white font-plus-jakarta mb-2">
                7 days
              </p>
              <p className="text-gray-400 text-sm">
                Average time to first strong match
              </p>
            </div>
            <div className="border-t md:border-t-0 md:border-l md:border-r border-gray-700 pt-6 md:pt-0">
              <p className="text-4xl font-black text-violet-400 font-plus-jakarta mb-2">
                94%
              </p>
              <p className="text-gray-400 text-sm">
                Of matched founders rate the match as highly relevant
              </p>
            </div>
            <div className="border-t md:border-t-0 pt-6 md:pt-0">
              <p className="text-4xl font-black text-white font-plus-jakarta mb-2">
                480+
              </p>
              <p className="text-gray-400 text-sm">
                Startups actively built by FounderConnect matches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
