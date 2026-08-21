import { type FormEvent, useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass, Globe2, Landmark, Mail, Menu, MoveRight, Sparkles, X } from "lucide-react";

const mail = "info@fairpoint.sk";
const mark = `${import.meta.env.BASE_URL}fairpoint-mark.svg`;
const nav = [["Služby", "#sluzby"], ["Prístup", "#pristup"], ["Pre koho", "#pre-koho"], ["Kontakt", "#kontakt"]] as const;
const services = [
  ["01", Landmark, "Verejné obstarávanie", "Od prvého zadania po uzatvorenie procesu. Strážime podklady, postup aj zrozumiteľnosť rozhodnutí.", ["Zákazky", "Súťažné podklady", "Metodika"]],
  ["02", Compass, "Projektový manažment", "Dávame projektu rytmus. Jasné vlastníctvo úloh, fungujúca koordinácia a menej slepých miest.", ["Harmonogram", "Koordinácia", "Výstupy"]],
  ["03", Globe2, "Fondy Európskej únie", "Meníme výzvy a nápady na kvalitne pripravené projekty s udržateľnou administratívou.", ["Projektový zámer", "Žiadosť", "Realizácia"]],
] as const;
const questions = [
  ["S čím začať, ak ešte nemáme všetky podklady?", "Práve vtedy má prvý rozhovor najväčší zmysel. Pomôžeme rozlíšiť, čo treba vyriešiť hneď, čo môže počkať a ktoré otázky rozhodnú o dobrom ďalšom kroku."],
  ["Viete sa pripojiť aj ku konkrétnej časti projektu?", "Áno. Nevnucujeme plošné riešenie. Môžeme pomôcť s jedným rozhodnutím, konkrétnou fázou alebo nastaviť priebežnú odbornú podporu."],
  ["Ako funguje prvá konzultácia?", "Stručne prejdeme cieľ, aktuálnu situáciu, termíny a riziká. Odchádzate s jasnejším obrazom situácie a odporúčaním, ako pokračovať."],
] as const;

function Marker({ number, label }: { number: string; label: string }) { return <div className="marker"><b>{number}</b><i /><span>{label}</span></div>; }

export default function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("shown")), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((item) => reveal.observe(item));
    const progress = () => document.documentElement.style.setProperty("--progress", `${window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)}`);
    progress(); window.addEventListener("scroll", progress, { passive: true });
    return () => { reveal.disconnect(); window.removeEventListener("scroll", progress); };
  }, []);

  function enquire(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || ""); const org = String(data.get("organization") || ""); const email = String(data.get("email") || ""); const note = String(data.get("message") || "");
    setSent(true); window.location.href = `mailto:${mail}?subject=${encodeURIComponent(`FairPoint — konzultácia / ${name}`)}&body=${encodeURIComponent(`Meno: ${name}\nOrganizácia: ${org}\nE-mail: ${email}\n\n${note}`)}`;
  }

  return <div className="site">
    <div className="progress" /><a className="skip" href="#obsah">Preskočiť na obsah</a>
    <header className="header"><div className="width header-inner">
      <a href="#uvod" className="brand" aria-label="FairPoint — úvod"><img src={mark} alt="" /><span><b>FAIR</b>POINT<small>PROJECT CLARITY</small></span></a>
      <nav className="nav" aria-label="Hlavná navigácia">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="nav-cta" href="#kontakt">Začať rozhovor <ArrowUpRight size={17} /></a>
      <button className="menu" type="button" onClick={() => setMenu(!menu)} aria-label={menu ? "Zavrieť menu" : "Otvoriť menu"}>{menu ? <X /> : <Menu />}</button>
    </div><div className={`mobile ${menu ? "open" : ""}`}><nav className="width">{nav.map(([label, href]) => <a onClick={() => setMenu(false)} key={href} href={href}>{label}<ArrowUpRight size={20} /></a>)}<a onClick={() => setMenu(false)} href="#kontakt" className="mobile-button">Poďme na to <ArrowRight size={18} /></a></nav></div></header>

    <main id="obsah">
      <section id="uvod" className="hero">
        <div className="hero-grid" /><div className="orb orb-a" /><div className="orb orb-b" /><div className="noise" />
        <div className="width hero-layout">
          <div className="hero-copy">
            <p className="kicker reveal"><i />VEREJNÝ ZÁUJEM / PRECÍZNA PRÁCA</p>
            <h1 className="reveal d1">Projekty, ktoré <em>obstoja</em> aj pod tlakom.</h1>
            <p className="lede reveal d2">Vnášame pokoj, poriadok a rozhodnosť do verejného obstarávania, projektov aj príležitostí z fondov EÚ.</p>
            <div className="actions reveal d3"><a href="#kontakt" className="button coral">Dohodnúť konzultáciu <ArrowRight size={19} /></a><a href="#sluzby" className="text-action">Objaviť možnosti <ArrowDownRight size={19} /></a></div>
            <div className="hero-note reveal d4"><b>01</b><span>Nie viac procesov. <strong>Viac istoty v správnom kroku.</strong></span></div>
          </div>
          <div className="constellation reveal d2" aria-label="Vizualizácia projektu v pohybe">
            <div className="constellation-top"><span>FAIRPOINT / LIVE VIEW</span><b><i />PRIPRAVENÉ</b></div>
            <div className="constellation-core"><div className="ring r1" /><div className="ring r2" /><div className="ring r3" /><div className="center"><Sparkles size={29} /><span>F</span></div>
              <div className="signal s1"><i className="coral-dot" /><b>STRATÉGIA</b><small>prvý krok</small></div><div className="signal s2"><i className="lime-dot" /><b>PROCES</b><small>jasné roly</small></div><div className="signal s3"><i className="violet-dot" /><b>VÝSLEDOK</b><small>spolu v cieli</small></div>
            </div>
            <div className="constellation-bottom"><span><small>SMER</small>zámer → plán</span><span><small>RYTMUS</small>plán → výsledok</span></div>
          </div>
        </div>
      </section>

      <section className="ticker"><div><span>Verejné obstarávanie</span><i>✦</i><span>Projektový manažment</span><i>✦</i><span>Fondy Európskej únie</span><i>✦</i><span>Verejné obstarávanie</span><i>✦</i><span>Projektový manažment</span></div></section>

      <section id="sluzby" className="services section"><div className="width"><div className="reveal"><Marker number="02" label="ČO ROBÍME" /></div><div className="heading split"><h2 className="reveal">Nedávame vám <em>rady.</em><br />Dávame veciam smer.</h2><p className="reveal d1">Vstúpime tam, kde sa rozhoduje o kvalite ďalšieho kroku. Vecne, priamo a s citom pre realitu projektu.</p></div>
        <div className="service-grid">{services.map(([number, Icon, title, copy, tags], index) => <article className={`service-card reveal d${index + 1}`} key={title}><div className="card-top"><span>{number}</span><Icon size={25} /></div><h3>{title}</h3><p>{copy}</p><div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#kontakt" aria-label={`Konzultovať ${title}`}><ArrowUpRight size={23} /></a></article>)}</div>
      </div></section>

      <section id="pristup" className="approach section"><div className="glow" /><div className="width approach-grid"><div className="approach-copy reveal"><Marker number="03" label="AKO PRACUJEME" /><h2>Keď je veľa premenných, <em>nájdeme os.</em></h2><p>Nerobíme okolo projektu viac ruchu. Odhaľujeme podstatné, nastavujeme poradie a držíme veci v pohybe.</p></div><div className="path">{[["01", "Zachytíme situáciu", "Ciele, obmedzenia, ľudia a otázky, ktoré si projekt pýta."], ["02", "Nakreslíme postup", "Rozhodnutia, dokumenty a míľniky dostanú jasnú logiku."], ["03", "Držíme kurz", "Koordinácia, dohľad a odborný nadhľad tam, kde sú naozaj potrebné."]].map(([n, title, text], index) => <article key={n} className={`path-step reveal d${index + 1}`}><b>{n}</b><div><h3>{title}</h3><p>{text}</p></div><MoveRight size={23} /></article>)}</div></div></section>

      <section id="pre-koho" className="audience section"><div className="width"><div className="reveal"><Marker number="04" label="PRE KOHO" /></div><p className="statement reveal">Spolupráca, ktorá sa nezačína univerzálnym balíkom. Začína sa <em>vašou situáciou.</em></p><div className="audience-list">{[["Samosprávy a verejné inštitúcie", "Keď investícia, verejný záujem a formálne požiadavky musia fungovať naraz."], ["Organizácie a prijímatelia podpory", "Keď treba premeniť zámer na projekt, ktorý obstojí počas celej realizácie."], ["Tímy s vysokou zodpovednosťou", "Keď potrebujete silný odborný pohľad bez pridania ďalšej vrstvy komplikácií."]].map(([title, text], index) => <article className={`audience-row reveal d${index + 1}`} key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p><ArrowRight size={24} /></article>)}</div></div></section>

      <section className="quote"><div className="width"><p className="reveal">„Najlepší proces je ten, ktorý ľuďom pomôže urobiť <em>dobré rozhodnutie</em> vo chvíli, keď na ňom záleží.“</p><span className="reveal d1">✦ FairPoint / s dôrazom na podstatné</span></div></section>

      <section className="faq section"><div className="width faq-grid"><div className="reveal"><Marker number="05" label="OTÁZKY" /><h2>Prvých pár <em>odpovedí.</em></h2></div><div>{questions.map(([question, answer], index) => <article className={`faq-item reveal ${faq === index ? "active" : ""}`} key={question}><button type="button" onClick={() => setFaq(faq === index ? -1 : index)} aria-expanded={faq === index}><b>0{index + 1}</b><span>{question}</span><ChevronDown size={22} /></button><div className="answer"><p>{answer}</p></div></article>)}</div></div></section>

      <section id="kontakt" className="contact"><div className="contact-orb ca" /><div className="contact-orb cb" /><div className="width contact-grid"><div className="contact-copy reveal"><Marker number="06" label="KONTAKT" /><h2>Začnime tam, kde ste <em>teraz.</em></h2><p>Jeden dobrý rozhovor dokáže projekt posunúť. Napíšte nám, čo riešite, a vrátime sa k vám s jasným ďalším krokom.</p><a href={`mailto:${mail}`}><Mail size={19} />{mail}<ArrowUpRight size={19} /></a></div><form onSubmit={enquire} className="form reveal d1"><label>Meno a priezvisko<input name="name" required autoComplete="name" placeholder="Ako vás môžeme osloviť?" /></label><label>Organizácia<input name="organization" autoComplete="organization" placeholder="Názov organizácie" /></label><label>E-mail<input name="email" required type="email" autoComplete="email" placeholder="vas@email.sk" /></label><label>Čo je pred vami?<textarea name="message" required placeholder="Stručne opíšte váš projekt alebo otázku." /></label><button className="button dark" type="submit">Pripraviť dopyt <ArrowRight size={18} /></button>{sent && <strong className="sent"><Check size={17} />Otvorí sa e-mailový klient s pripraveným dopytom.</strong>}<small>Formulár neukladá údaje na stránke. Pošle vás do vášho e-mailového klienta.</small></form></div></section>
    </main>

    <footer><div className="width footer-top"><a href="#uvod" className="footer-brand"><img src={mark} alt="" /><span><b>FAIR</b>POINT</span></a><p>Verejné obstarávanie<br />Projektový manažment<br />Fondy Európskej únie</p><a className="footer-round" href="#kontakt">Kontakt<br /><ArrowUpRight size={18} /></a></div><div className="width footer-bottom"><span>© {new Date().getFullYear()} FairPoint, s.r.o.</span><span>Slovensko / Európska únia</span><a href={`mailto:${mail}`}>{mail}</a></div></footer>
  </div>;
}
