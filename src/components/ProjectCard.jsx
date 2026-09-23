import {
  Ambulance,
  Banknote,
  Gamepad2,
  Hospital,
  ShoppingBag,
} from "lucide-react";

const iconMap = {
  hospital: Hospital,
  ambulance: Ambulance,
  gamepad: Gamepad2,
  banknote: Banknote,
  "shopping-bag": ShoppingBag,
};

const colorMap = {
  blue: {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    pillBg: "bg-blue-50",
    pillText: "text-blue-600",
  },
  green: {
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    pillBg: "bg-emerald-50",
    pillText: "text-emerald-700",
  },
  pink: {
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    pillBg: "bg-pink-50",
    pillText: "text-pink-600",
  },
  purple: {
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    pillBg: "bg-purple-50",
    pillText: "text-purple-600",
  },
  orange: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    pillBg: "bg-orange-50",
    pillText: "text-orange-600",
  },
};

export default function ProjectCard({ project }) {
  const IconComponent = iconMap[project.icon] ?? ShoppingBag;
  const colors = colorMap[project.color] ?? colorMap.blue;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-2 p-3 bg-white rounded-[18px] border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 w-full overflow-hidden"
    >
      {/* Icon */}
      <div
        className={`w-9 h-9 rounded-[12px] ${colors.iconBg} flex items-center justify-center flex-shrink-0`}
      >
        <IconComponent
          size={18}
          className={colors.iconColor}
          strokeWidth={1.8}
        />
      </div>

      {/* Title & subtitle */}
      <div className="min-w-0">
        <p className="text-[11px] font-bold text-slate-800 leading-snug truncate group-hover:text-blue-600 transition-colors">
          {project.title}
        </p>
        <p className="text-[10px] text-slate-400 truncate mt-0.5">
          {project.subtitle}
        </p>
      </div>

      {/* Tech pills — show first two only */}
      <div className="flex flex-wrap gap-1">
        {project.tech.slice(0, 2).map((t) => (
          <span
            key={t}
            className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${colors.pillBg} ${colors.pillText} truncate`}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
