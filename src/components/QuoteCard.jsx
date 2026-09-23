import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <section className="mx-4 mt-5">
      <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 px-6 py-5 shadow-sm overflow-hidden">
        {/* Large decorative quote mark */}
        <div className="absolute top-3 left-4 text-blue-200 opacity-60">
          <Quote size={36} strokeWidth={1.5} />
        </div>

        <div className="relative pt-4 text-center">
          <p className="text-sm font-semibold text-slate-600 italic leading-relaxed">
            &ldquo;Code today, build a better tomorrow.&rdquo;
          </p>
          <p className="text-xs font-bold text-blue-500 mt-2 tracking-wide">
            — Bunly
          </p>
        </div>
      </div>
    </section>
  );
}
