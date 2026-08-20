import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Landmark,
  Mail,
  Menu,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";

const contactEmail = "info@fairpoint.sk";
const assetPath = `${import.meta.env.BASE_URL}fairpoint-logo.png`;

const navigation = [
  { label: "Služby", href: "#sluzby" },
  { label: "Ako pracujeme", href: "#postup" },
  { label: "Pre koho", href: "#pre-koho" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  {
    icon: Landmark,
    title: "Verejné obstarávanie",
    description:
      "Pripravíme a koordinujeme obstarávanie tak, aby bolo vecné, prehľadné a obhájiteľné v každom kroku.",
    items: ["Príprava zákaziek", "Súťažné podklady", "Metodické poradenstvo"],
  },
  {
    icon: FileCheck2,
    title: "Projektový manažment",
    description:
      "Udržiavame projekty v pohybe — od zadania a harmonogramu až po kontrolu výstupov a komunikáciu tímov.",
    items: ["Riadenie harmonogramu", "Koordinácia partnerov", "Kontrola výstupov"],
  },
  {
    icon: Globe2,
    title: "Fondy Európskej únie",
    description:
      "Pomáhame pripraviť kvalitný projektový zámer, zorientovať sa vo výzve a zvládnuť administratívu podpory.",
    items: ["Projektové zámery", "Žiadosti o podporu", "Administrácia projektu"],
  },
];

const process = [
  {
    number: "01",
    title: "Zorientujeme sa v situácii",
    text: "Na úvod si spoločne ujasníme cieľ, rozsah, termíny a riziká. Získate konkrétny pohľad na najbližší krok.",
  },
  {
    number: "02",
    title: "Navrhneme jasný postup",
    text: "Pripravíme postup práce, zodpovednosti a dokumenty tak, aby ste mali projekt pod kontrolou od začiatku.",
  },
  {
    number: "03",
    title: "Dotiahneme veci do výsledku",
    text: "Koordinujeme kľúčové úlohy, komunikáciu a administratívu. Vy sa môžete sústrediť na rozhodnutia, ktoré sú podstatné.",
  },
];

const audiences = [
  {
    title: "Samosprávy a verejné inštitúcie",
    text: "Pri obstarávaní, investičných zámeroch a projektoch financovaných z verejných zdrojov.",
  },
  {
    title: "Organizácie a prijímatelia podpory",
    text: "Pri príprave žiadostí, projektovom riadení a plnení povinností počas realizácie.",
  },
  {
    title: "Tímy, ktoré potrebujú expertízu navyše",
    text: "Keď potrebujete skúseného partnera na konkrétnu časť projektu alebo priebežnú metodickú podporu.",
  },
];

const questions = [
  {
    question: "Kedy je vhodné ozvať sa?",
    answer:
      "Čím skôr, tým viac možností máme pri nastavení postupu. Ozvite sa už pri prvotnom zámere, pri príprave zákazky alebo hneď, keď potrebujete druhý odborný pohľad.",
  },
  {
    question: "Pomáhate aj s konkrétnou časťou projektu?",
    answer:
      "Áno. Spoluprácu vieme nastaviť od jednorazovej konzultácie až po priebežnú podporu vybranej fázy projektu alebo obstarávania.",
  },
  {
    question: "Ako prebieha prvá konzultácia?",
    answer:
      "Stručne si prejdeme váš cieľ, aktuálny stav, termíny a podklady, ktoré už máte. Následne navrhneme zrozumiteľný ďalší postup.",
  },
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `Nezáväzná konzultácia${name ? ` — ${name}` : ""}`;
    const body = [
      name ? `Meno: ${name}` : "",
      organization ? `Organizácia: ${organization}` : "",
      "",
      message || "Dobrý deň, mám záujem o nezáväznú konzultáciu.",
    ]
      .filter(Boolean)
      .join("\n");

    setFormSubmitted(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f8f6] text-slate-900">
      <a className="skip-link" href="#obsah">
        Preskočiť na obsah
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8f8f6]/95 backdrop-blur">
        <div className="page-shell flex h-20 items-center justify-between">
          <a href="#uvod" className="flex items-center" aria-label="FairPoint — úvod">
            <img src={assetPath} alt="FairPoint" className="h-10 w-auto object-contain" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavná navigácia">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#kontakt" className="button button-primary hidden lg:inline-flex">
            Konzultovať projekt
            <ArrowRight size={17} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-slate-900 lg:hidden"
            aria-label={mobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-[#f8f8f6] lg:hidden">
            <nav className="page-shell flex flex-col gap-1 py-5" aria-label="Mobilná navigácia">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="mobile-nav-link">
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" onClick={closeMenu} className="button button-primary mt-3 justify-center">
                Konzultovať projekt
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="obsah">
        <section id="uvod" className="relative isolate overflow-hidden">
          <div className="hero-grid absolute inset-0 -z-10 opacity-70" />
          <div className="absolute right-[-7rem] top-16 -z-10 h-80 w-80 rounded-full bg-[#cddfce]/70 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
          <div className="page-shell grid min-h-[680px] items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.07fr_.93fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8d8cb] bg-[#eff5ef] px-4 py-2 text-sm font-medium text-[#31583d]">
                <ShieldCheck size={16} aria-hidden="true" />
                Partner pre projekty s verejnou hodnotou
              </div>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                Istota v rozhodnutiach. <span className="text-[#44734d]">Poriadok</span> v projektoch.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                FairPoint pomáha pripraviť verejné obstarávanie, riadiť náročné projekty a premeniť príležitosti z fondov EÚ na kvalitne realizované výsledky.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="button button-primary justify-center sm:justify-start">
                  Dohodnúť konzultáciu
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#sluzby" className="button button-secondary justify-center sm:justify-start">
                  Preskúmať služby
                </a>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-xl font-semibold text-slate-950">Jasný</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">postup a zodpovednosti</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-slate-950">Vecná</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">komunikácia a dokumenty</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-slate-950">Spoľahlivá</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">podpora pri rozhodovaní</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mr-0">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.22)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#8cb68f]" />
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="text-sm font-medium tracking-wide text-white/70">FAIRPOINT / PROJEKTOVÝ PREHĽAD</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#a4d09b]" aria-label="Pripravené" />
                </div>
                <div className="py-9 sm:py-12">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a4d09b]">Od zámeru po výsledok</p>
                  <p className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                    Komplexné projekty si zaslúžia pokojný, zrozumiteľný postup.
                  </p>
                </div>
                <div className="grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2">
                  {[
                    "Strategické nastavenie",
                    "Transparentný proces",
                    "Koordinované kroky",
                    "Kontrola termínov",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3 text-sm text-white/85">
                      <CircleCheck size={17} className="shrink-0 text-[#a4d09b]" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden max-w-[255px] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ee] text-[#44734d]">
                    <Clock3 size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Premyslené kroky</p>
                    <p className="text-xs text-slate-500">v správnom čase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-7">
          <div className="page-shell grid gap-5 text-sm text-slate-600 sm:grid-cols-3 sm:gap-8">
            <div className="flex items-center gap-3"><Scale className="text-[#44734d]" size={20} aria-hidden="true" /><span>Rozhodnutia opierame o presné podklady.</span></div>
            <div className="flex items-center gap-3"><Handshake className="text-[#44734d]" size={20} aria-hidden="true" /><span>Spoluprácu nastavujeme podľa vášho projektu.</span></div>
            <div className="flex items-center gap-3"><FileText className="text-[#44734d]" size={20} aria-hidden="true" /><span>Komunikujeme zrozumiteľne a vecne.</span></div>
          </div>
        </section>

        <section id="sluzby" className="page-shell py-20 sm:py-28">
          <SectionIntro
            eyebrow="Služby"
            title="Praktická podpora tam, kde záleží na každom kroku."
            text="Zapojíme sa pri príprave, počas realizácie aj v momentoch, keď potrebujete posúdiť ďalší krok. Rozsah spolupráce prispôsobíme vašej situácii."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5ee] text-[#44734d] transition group-hover:bg-[#44734d] group-hover:text-white">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-slate-200 pt-6 text-sm font-medium text-slate-700">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3"><Check size={16} className="text-[#44734d]" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="postup" className="bg-slate-950 py-20 text-white sm:py-28">
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow text-[#a4d09b]">Náš prístup</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">Menej neistoty. Viac riadeného pohybu vpred.</h2>
              </div>
              <p className="text-base leading-8 text-white/65 sm:text-lg">Dobré poradenstvo nie je len o odpovedi na otázku. Je o postupe, ktorému tím rozumie a ktorý dokáže použiť v praxi.</p>
            </div>
            <ol className="mt-14 grid gap-4 md:grid-cols-3">
              {process.map((item) => (
                <li key={item.number} className="rounded-2xl border border-white/15 bg-white/[0.045] p-6 sm:p-7">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[#a4d09b]">{item.number}</span>
                  <h3 className="mt-12 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/65">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pre-koho" className="page-shell py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <SectionIntro
              eyebrow="Pre koho"
              title="Partnerstvo, ktoré sa prispôsobí vašej realite."
              text="Komplexnosť projektu nemusí znamenať zbytočne komplikovanú spoluprácu. Zvolíme taký rozsah podpory, ktorý prinesie reálny posun."
            />
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {audiences.map((audience, index) => (
                <div key={audience.title} className="group grid gap-3 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
                  <span className="text-lg font-semibold text-[#44734d]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-slate-950">{audience.title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-slate-600">{audience.text}</p>
                  </div>
                  <ArrowRight className="hidden text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#44734d] sm:block" size={21} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-shell pb-20 sm:pb-28">
          <div className="rounded-[2rem] bg-[#e6efe5] px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-[#44734d]">Prvý krok</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Potrebujete si ujasniť ďalší krok?</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Povedzte nám stručne, čo riešite. Spoločne sa pozrieme, kde má odborná podpora najväčší zmysel.</p>
            </div>
            <a href="#kontakt" className="button button-primary mt-8 shrink-0 lg:mt-0">
              Začať konzultáciu
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
          <div className="page-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <SectionIntro
              eyebrow="Časté otázky"
              title="Hovorme o vašom projekte konkrétne."
              text="Tu sú odpovede na otázky, s ktorými sa pri prvom rozhovore stretávame najčastejšie."
            />
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {questions.map((item, index) => {
                const isOpen = openQuestion === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-[-0.02em] text-slate-950"
                      aria-expanded={isOpen}
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                    >
                      {item.question}
                      <ChevronDown className={`shrink-0 text-[#44734d] transition ${isOpen ? "rotate-180" : ""}`} size={22} aria-hidden="true" />
                    </button>
                    {isOpen && <p className="max-w-2xl pb-6 leading-7 text-slate-600">{item.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="kontakt" className="page-shell py-20 sm:py-28">
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white lg:grid-cols-[.82fr_1.18fr]">
            <div className="bg-slate-950 p-7 text-white sm:p-12">
              <p className="eyebrow text-[#a4d09b]">Kontakt</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Začnime rozhovor o vašom projekte.</h2>
              <p className="mt-5 max-w-md leading-8 text-white/65">Stačí krátko opísať situáciu. Formulár pripraví e-mail s vaším dopytom, ktorý môžete jednoducho odoslať.</p>
              <div className="mt-10 border-t border-white/15 pt-7">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/50">Napíšte nám</p>
                <a className="mt-3 inline-flex items-center gap-3 text-lg font-medium text-white transition hover:text-[#a4d09b]" href={`mailto:${contactEmail}`}>
                  <Mail size={19} aria-hidden="true" />
                  {contactEmail}
                </a>
              </div>
            </div>

            <form onSubmit={submitContact} className="p-7 sm:p-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="field-label">
                  Meno a priezvisko
                  <input className="field-input" name="name" autoComplete="name" required />
                </label>
                <label className="field-label">
                  Organizácia
                  <input className="field-input" name="organization" autoComplete="organization" />
                </label>
              </div>
              <label className="field-label mt-6">
                E-mail
                <input className="field-input" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="field-label mt-6">
                S čím vám môžeme pomôcť?
                <textarea className="field-input min-h-32 resize-y" name="message" required />
              </label>
              <button type="submit" className="button button-primary mt-7">
                Pripraviť e-mailový dopyt
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              {formSubmitted && <p className="mt-4 flex items-center gap-2 text-sm text-[#44734d]"><CircleCheck size={17} aria-hidden="true" />Váš e-mailový klient sa otvorí s pripraveným dopytom.</p>}
              <p className="mt-5 text-xs leading-5 text-slate-500">Odoslaním formulára otvoríte vlastný e-mailový klient. Údaje sa na tejto stránke neukladajú.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="page-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <img src={assetPath} alt="FairPoint" className="h-8 w-auto object-contain" />
            <p className="mt-3 text-sm text-slate-500">Verejné obstarávanie · Projektový manažment · Fondy EÚ</p>
          </div>
          <div className="text-sm text-slate-500 sm:text-right">
            <p>© {new Date().getFullYear()} FairPoint, s.r.o.</p>
            <a href={`mailto:${contactEmail}`} className="mt-1 inline-block transition hover:text-[#44734d]">{contactEmail}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
