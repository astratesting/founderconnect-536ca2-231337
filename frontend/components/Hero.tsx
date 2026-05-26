import Link from "next/link";
import { ArrowRight, Github, Star, Users, Zap } from "lucide-react";

const socialProof = [
  { avatar: "SC", color: "from-violet-400 to-purple-500" },
  { avatar: "MR", color: "from-indigo-400 to-blue-500" },
  { avatar: "AK", color: "from-pink-400 to-rose-500" },
  { avatar: "JL", color: "from-amber-400 to-orange-500" },
  { avatar: "TN", color: "from-emerald-400 to-teal-500" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 hero-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-violet-200 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm animate-fade-in">
            <Zap className="w-4 h-4 fill-violet-500 text-violet-500" />
            AI-powered co-founder matching
            <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full text-xs font-bold">
              New
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 font-plus-jakarta leading-[1.05] mb-6 animate-fade-up">
            Find the co-founder{" "}
            <span className="gradient-text">who completes</span>{" "}
            your startup
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            FounderConnect matches technical and business founders based on
            complementary skills, shared interests, and startup vision alignment.
            Most founders find a strong match in{" "}
            <span className="font-semibold text-gray-900">under 7 days</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start matching free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/auth/signin?provider=github"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex -space-x-2">
              {socialProof.map((p, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${p.color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                >
                  {p.avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-900">12,400+</span>{" "}
                founders matched
              </p>
            </div>
          </div>
        </div>

        {/* Hero cards preview */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Match card preview */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    AK
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Alex Kim</p>
                    <p className="text-xs text-gray-500">Product Designer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-violet-600">94%</p>
                  <p className="text-xs text-gray-400">match</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {["UI/UX", "Figma", "User Research"].map((s) => (
                  <span key={s} className="text-xs bg-violet-50 text-violet-700 px-2 py-0.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600">Building an EdTech platform for remote teams</p>
            </div>

            {/* Skill match visualization */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Skill Complement
              </p>
              {[
                { skill: "Technical", you: 85, match: 20 },
                { skill: "Business", you: 30, match: 90 },
                { skill: "Design", you: 40, match: 80 },
                { skill: "Marketing", you: 25, match: 75 },
              ].map((item) => (
                <div key={item.skill} className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{item.skill}</span>
                  </div>
                  <div className="flex gap-1 h-2">
                    <div
                      className="bg-violet-500 rounded-full"
                      style={{ width: `${item.you}%` }}
                    />
                    <div
                      className="bg-indigo-200 rounded-full"
                      style={{ width: `${item.match}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-3">
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="w-2 h-2 bg-violet-500 rounded-full" /> You
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="w-2 h-2 bg-indigo-200 rounded-full" /> Match
                </span>
              </div>
            </div>

            {/* Message preview */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                  SC
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">Sarah Chen</p>
                  <p className="text-xs text-gray-400">2m ago</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]">
                  <p className="text-xs text-gray-700">
                    Hey! I saw your profile — your ML background is exactly what our platform needs 🚀
                  </p>
                </div>
                <div className="bg-violet-600 rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%] ml-auto">
                  <p className="text-xs text-white">
                    Would love to learn more about your vision. Got 30 mins this week?
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <Users className="w-3 h-3 text-gray-400" />
                <p className="text-xs text-gray-400">Matched 94% • 3 mutual interests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
