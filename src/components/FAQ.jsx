const faqs = [
  {
    question: "Comment personnaliser les réponses ?",
    answer:
      "Ce prototype prévoit d’intégrer vos guides, protocoles et messages clés. Un back-office fictif illustre comment ajuster les formulations.",
  },
  {
    question: "Quelles données sont enregistrées ?",
    answer:
      "Seules des questions anonymisées seraient stockées. Cette maquette n’utilise aucune donnée réelle et sert d’exemple de conformité RGPD.",
  },
  {
    question: "Peut-on intégrer SangBot sur plusieurs canaux ?",
    answer:
      "Oui : widget web, page dédiée, QR codes ou e-mails sont envisagés. Des connecteurs WhatsApp et Messenger restent à prototyper.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-gradient-to-br from-white via-rose-50/40 to-white py-20">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white/80 px-4 py-10 shadow-[0_60px_120px_-70px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:px-6 sm:py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Une équipe d’accompagnement fictive illustre comment suivre vos
            conversations et maintenir des contenus cohérents.
          </p>
        </div>
        <dl className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-rose-100/60 bg-white/90 p-6 shadow-[0_35px_80px_-60px_rgba(225,29,72,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_45px_100px_-55px_rgba(225,29,72,0.6)] animate-scale-in"
            >
              <dt className="text-lg font-semibold text-slate-900">
                {faq.question}
              </dt>
              <dd className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
