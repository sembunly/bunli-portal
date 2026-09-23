import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="w-full">
      {/* Section header */}
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-[13px] font-bold text-slate-800">
          Featured Projects
        </h2>
        <a
          href="https://docs.bunli-it.site"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-500 hover:text-blue-700 transition-colors"
        >
          View All
          <ArrowRight size={11} />
        </a>
      </div>

      {/* 3-column compact grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
