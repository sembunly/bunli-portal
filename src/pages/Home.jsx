import BottomNav from "../components/BottomNav";
import FeaturedProjects from "../components/FeaturedProjects";
import Header from "../components/Header";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#e8edf5" }}
    >
      <div
        className="relative mx-auto w-full min-h-screen flex flex-col"
        style={{ maxWidth: 430, background: "#f7f9fc" }}
      >
        <Header />

        <main className="flex-1 flex flex-col gap-3 px-4 pt-[57px] pb-28">
          <Hero />
          <Stats />
          <FeaturedProjects />
          <QuickLinks />

          <footer className="mt-1 mb-1 text-center">
            <p className="text-[11px] text-slate-300 font-medium">
              © 2026 Bunly · bunli-it.site
            </p>
          </footer>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
