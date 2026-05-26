import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Link from "next/link";
import {
  Users,
  Star,
  ArrowRight,
  Building2,
  Rocket,
  Globe,
} from "lucide-react";

const stats = [
  { value: "12,400+", label: "Founders registered" },
  { value: "3,200+", label: "Successful matches" },
  { value: "480+", label: "Startups launched" },
  { value: "94%", label: "Match satisfaction" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO & Co-founder, DataPilot",
    avatar: "SC",
    color: "from-violet-500 to-purple-600",
    quote:
      "FounderConnect matched me with Marcus in 3 days. Our skills were perfectly complementary — I handle the tech, he owns sales. We closed our seed round 6 months later.",
    tags: ["Full-Stack Dev", "AI/ML", "B2B SaaS"],
  },
  {
    name: "Marcus Rivera",
    role: "CEO & Co-founder, DataPilot",
    avatar: "MR",
    color: "from-indigo-500 to-blue-600",
    quote:
      "I tried every co-founder matching service. FounderConnect's algorithm actually understood what I needed — someone technical who shares my obsession with enterprise sales automation.",
    tags: ["Sales", "GTM Strategy", "Enterprise"],
  },
  {
    name: "Priya Nair",
    role: "Co-founder, HealthStack",
    avatar: "PN",
    color: "from-pink-500 to-rose-600",
    quote:
      "Within a week I had 5 high-quality matches. The complementary skills scoring isn't just keyword matching — it really surfaces people who fill your gaps.",
    tags: ["Product", "HealthTech", "Growth"],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Build your founder profile",
    description:
      "Share your skills, experience, and the startup you want to build. Tell us what kind of co-founder you need.",
    icon: Users,
  },
  {
    step: "02",
    title: "Get AI-powered matches",
    description:
      "Our algorithm scores complementary skills, shared interests, and startup stage alignment to surface your best matches.",
    icon: Rocket,
  },
  {
    step: "03",
    title: "Connect and build",
    description:
      "Message your matches directly. Filter by industry, stage, location, and commitment level to find the right fit.",
    icon: Building2,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold font-plus-jakarta mb-2">
                  {stat.value}
                </p>
                <p className="text-violet-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-plus-jakarta mb-4">
              Find your co-founder in{" "}
              <span className="gradient-text">3 simple steps</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Most founders find a strong match within 7 days. No cold
              outreach, no guesswork — just data-driven compatibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-black text-violet-100 font-plus-jakarta leading-none">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-violet-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-plus-jakarta">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              Founder stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900 font-plus-jakarta">
              Real matches, real startups
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-violet-50 text-violet-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            Join 12,000+ founders worldwide
          </div>
          <h2 className="text-5xl font-bold text-gray-900 font-plus-jakarta mb-6">
            Your co-founder is out there.{" "}
            <span className="gradient-text">Let&apos;s find them.</span>
          </h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Stop searching LinkedIn and cold emailing strangers. FounderConnect
            surfaces complementary matches who share your vision and fill your
            skill gaps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signin"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Create your profile free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/discover"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Browse founders
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Free forever · No credit card · Sign in with GitHub or Google
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold font-plus-jakarta">
                FounderConnect
              </span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </div>
            <p className="text-sm">© 2024 FounderConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
