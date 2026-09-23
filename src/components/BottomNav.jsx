import { Home, LayoutGrid, Mail, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", icon: Home, href: "#" },
  {
    label: "Projects",
    icon: LayoutGrid,
    href: "#",
  },
  { label: "About", icon: User, href: "#" },
  { label: "Contact", icon: Mail, href: "#" },
];

export default function BottomNav() {
  const [active, setActive] = useState("Home");

  return (
    /* Fixed nav aligned to the 430px container center */
    <nav
      className="fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 border-t border-slate-100 bg-white"
      style={{ maxWidth: 430 }}
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ label, icon: Icon, href }) => {
          const isActive = active === label;
          const isExternal = href.startsWith("http");
          return (
            <a
              key={label}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              onClick={() => setActive(label)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[52px] ${
                isActive
                  ? "text-blue-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 1.8}
                className="transition-all duration-200"
              />
              <span
                className={`text-[10px] font-semibold transition-colors ${
                  isActive ? "text-blue-600" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
      {/* iOS safe area padding */}
      <div
        className="h-safe-bottom"
        style={{ height: "env(safe-area-inset-bottom, 0px)" }}
      />
    </nav>
  );
}
