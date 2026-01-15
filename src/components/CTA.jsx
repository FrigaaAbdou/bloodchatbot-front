export function CTA({ onPrimaryAction }) {
  return (
    <section
      id="demo"
      className="relative isolate overflow-hidden bg-gradient-to-br from-rose-500 via-rose-400 to-rose-600 py-16 animate-fade-in"
    >
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/10 px-5 py-10 text-center text-white shadow-[0_65px_130px_-70px_rgba(15,23,42,0.45)] backdrop-blur-md sm:px-6 sm:py-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Prêt à transformer ce concept en expérience réelle ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-rose-50">
          Planifiez une démo fictive pour découvrir comment SangBot pourrait
          s’adapter à vos centres, vos donneurs et vos objectifs demain.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            type="button"
            onClick={onPrimaryAction}
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-600 shadow-lg shadow-rose-500/40 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-50 sm:w-auto"
          >
            Échanger sur le concept
          </button>
          <a
            className="w-full rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            href="#chat-preview"
          >
            Voir le chatbot en action
          </a>
        </div>
      </div>
    </section>
  );
}
