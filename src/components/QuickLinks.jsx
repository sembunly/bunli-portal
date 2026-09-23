import { BookMarked, ExternalLink, LayoutDashboard } from "lucide-react";

const links = [
  {
    title: "My Portfolio",
    description: "About me, skills, projects, and experience",
    href: "https://docs.bunli-it.site",
    icon: <LayoutDashboard size={22} className="text-blue-600" />,
    iconBg: "bg-blue-50",
    accent: "from-blue-500 to-blue-600",
    border: "hover:border-blue-200",
  },
  {
    title: "Bunli Docs",
    description: "My notes, tutorials and technical documentation",
    href: "https://docs.bunli-it.site",
    icon: <BookMarked size={22} className="text-indigo-600" />,
    iconBg: "bg-indigo-50",
    accent: "from-indigo-500 to-indigo-600",
    border: "hover:border-indigo-200",
  },
];

export default function QuickLinks() {
  return (
    <section className="mx-4 mt-5">
      <h2 className="text-base font-bold text-slate-800 mb-3">Quick Links</h2>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 ${link.border} shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-xl ${link.iconBg} flex items-center justify-center flex-shrink-0`}
            >
              {link.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {link.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5 truncate">
                {link.description}
              </p>
            </div>

            {/* External icon */}
            <div className="flex-shrink-0 text-slate-300 group-hover:text-blue-400 transition-colors">
              <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
