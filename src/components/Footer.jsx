export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-white/5 py-10 text-slate-400 shadow-[0_-40px_120px_-60px_rgba(15,23,42,0.8)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-200">
            SangBot
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Concept d’assistant IA pour informer, rassurer et motiver les donneurs de sang.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs">
          <a className="transition hover:text-rose-200" href="#features">
            Fonctionnalités
          </a>
          <a className="transition hover:text-rose-200" href="#chat-preview">
            Expérience
          </a>
          <a className="transition hover:text-rose-200" href="#how-it-works">
            Parcours
          </a>
          <a className="transition hover:text-rose-200" href="#faq">
            FAQ
          </a>
          <a
            className="transition hover:text-rose-200"
            href="mailto:contact@sangbot.com"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} SangBot. Prototype fictif — tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
