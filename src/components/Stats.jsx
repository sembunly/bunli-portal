import { Code2, GraduationCap, Heart } from "lucide-react";

const stats = [
  {
    icon: <Code2 size={17} className="text-blue-500" />,
    iconBg: "bg-blue-50",
    value: "10+",
    label: "Projects",
  },
  {
    icon: <GraduationCap size={17} className="text-indigo-500" />,
    iconBg: "bg-indigo-50",
    value: "Y3S1",
    label: "Student",
  },
  {
    icon: <Heart size={17} className="text-rose-500" />,
    iconBg: "bg-rose-50",
    value: "Tech",
    label: "Passion",
  },
];

export default function Stats() {
  return (
    <section className="w-full">
      <div className="w-full bg-white rounded-[20px] shadow-sm border border-slate-100">
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 py-4 px-2"
            >
              <div
                className={`w-8 h-8 rounded-[10px] ${stat.iconBg} flex items-center justify-center`}
              >
                {stat.icon}
              </div>
              <p className="text-[15px] font-extrabold text-slate-800 leading-none">
                {stat.value}
              </p>
              <p className="text-[11px] text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
