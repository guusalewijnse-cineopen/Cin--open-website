import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Headphones,
  MapPin,
  Wine,
  Users,
  Calendar,
  Send,
  Instagram,
  Mail,
  Film,
  Coffee,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import skylineImg from "@/assets/rotterdam-skyline.png";
import logoMark from "@/assets/logo-mark.png";
import logoWordmark from "@/assets/logo-wordmark.png";
import strip0 from "@/assets/strip-0.png";
import strip1 from "@/assets/strip-1.png";
import strip2 from "@/assets/strip-2.png";

const pillars = [
  {
    icon: Headphones,
    title: "Koptelefoon Cinema",
    desc: "Optimale geluidservaring zonder overlast.",
  },
  {
    icon: MapPin,
    title: "Unieke Locaties",
    desc: "Bijzondere plekken in Rotterdam als decor.",
  },
  {
    icon: Wine,
    title: "Sfeer & Horeca",
    desc: "Gasten genieten van een drankje, een film en elkaar.",
  },
  {
    icon: Users,
    title: "Intiem & Exclusief",
    desc: "Kleinschalig opgezet voor een persoonlijke beleving.",
  },
];

const timeline = [
  {
    time: "20:45",
    icon: Coffee,
    title: "Inloop gasten",
    desc: "Gasten arriveren en worden ontvangen. Tijd om een drankje te halen en te genieten van de sfeer.",
  },
  {
    time: "21:15",
    icon: Film,
    title: "Start film",
    desc: "Korte introductie en de film begint. Iedereen geniet via hoogwaardige koptelefoons.",
  },
  {
    time: "22:15",
    icon: Coffee,
    title: "Pauze – 15 minuten",
    desc: "Even de benen strekken, een drankje halen en bijpraten onder het genot van muziek.",
    highlight: true,
  },
  {
    time: "22:30",
    icon: Film,
    title: "Film vervolg",
    desc: "We duiken terug de film in voor de tweede helft.",
  },
  {
    time: "23:30",
    icon: Star,
    title: "Einde film",
    desc: "De film eindigt, gasten kunnen nog nagenieten met een drankje.",
  },
  {
    time: "22:30 – 00:30",
    icon: Truck,
    title: "Afbouw",
    desc: "Ons team breekt alles netjes af en laat de locatie verzorgd achter.",
  },
];

const stats = [
  { icon: Calendar, value: "Circa 25", label: "filmavonden" },
  { icon: MapPin, value: "5", label: "karakteristieke locaties in Rotterdam" },
  { icon: Users, value: "120", label: "gemiddeld bezoekers per avond" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Top nav */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logoMark}
              alt="Ciné Open"
              className="h-14 w-auto"
            />
          </div>
          <Link href="/over-ons">
            <button
              data-testid="link-over-ons"
              className="text-foreground/70 hover:text-primary transition-colors font-sans text-xs md:text-sm uppercase tracking-[0.2em]"
            >
              Over ons
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 md:pt-36 pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-sans uppercase tracking-[0.25em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Coming soon · Zomer 2026
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-primary tracking-tight">
                Ciné Open
              </h1>
              <p className="mt-6 text-2xl md:text-3xl font-serif italic text-foreground/70">
                Meer dan alleen een film.
              </p>
              <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 font-sans leading-relaxed">
                Ciné Open organiseert intieme openluchtfilmavonden op
                bijzondere locaties in Rotterdam. Samen creëren we een unieke
                beleving waar sfeer, kwaliteit en samenkomen centraal staan.
              </p>

              {/* Inline signup */}
              <div className="mt-10 max-w-lg">
                {!subscribed ? (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Input
                      type="email"
                      data-testid="input-email"
                      placeholder="Jouw e-mailadres"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-card border-border h-12 text-base focus-visible:ring-primary/40 placeholder:text-muted-foreground/70"
                    />
                    <Button
                      type="submit"
                      data-testid="button-subscribe"
                      size="lg"
                      className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-sans uppercase tracking-[0.15em] text-xs"
                    >
                      Hou mij op de hoogte
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-md border border-primary/20 bg-primary/5 p-5"
                    data-testid="text-subscribed"
                  >
                    <h4 className="font-serif text-xl text-primary">
                      Bedankt voor je interesse.
                    </h4>
                    <p className="mt-1 text-sm text-foreground/70 font-sans">
                      Je staat op de lijst. We laten van ons horen zodra de
                      kaartverkoop start.
                    </p>
                  </motion.div>
                )}
                <p className="mt-3 text-xs text-muted-foreground font-sans">
                  Eerste in de rij voor tickets, locaties en de filmprogrammering.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[5/4] rounded-md overflow-hidden shadow-2xl">
                <img
                  src={skylineImg}
                  alt="Rotterdam skyline bij zonsondergang"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
                {/* Mini logo card overlay */}
                <div className="absolute bottom-5 right-5 bg-card/95 backdrop-blur-sm rounded-sm px-4 py-3 shadow-lg border border-card-border">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <span className="font-serif text-sm text-primary">
                      Ciné Open
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col items-start gap-3"
              >
                <p.icon className="w-7 h-7 text-primary-foreground/90" strokeWidth={1.4} />
                <h3 className="font-sans uppercase tracking-[0.18em] text-xs font-semibold text-primary-foreground/95">
                  {p.title}
                </h3>
                <p className="text-sm font-sans text-primary-foreground/75 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Over Ciné Open + Stats + Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Over + stats */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-sans uppercase tracking-[0.25em] text-xs text-primary mb-3">
                  Over Ciné Open
                </h2>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                  Een Rotterdams zomerconcept met aandacht voor detail.
                </h3>
                <div className="mt-6 space-y-4 text-foreground/75 font-sans leading-relaxed">
                  <p>
                    Ciné Open organiseert in juli en augustus 2026 een reeks
                    kleinschalige openluchtfilmavonden in Rotterdam.
                  </p>
                  <p>
                    We richten ons op een jongvolwassen, stedelijk publiek dat
                    actief op zoek is naar nieuwe ervaringen in eigen stad.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <h4 className="font-sans uppercase tracking-[0.2em] text-[11px] text-primary mb-5">
                    Zomer 2026 in het kort
                  </h4>
                  <ul className="space-y-4">
                    {stats.map((s) => (
                      <li key={s.label} className="flex items-start gap-4">
                        <div className="mt-0.5 w-9 h-9 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <s.icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-serif text-lg text-foreground">
                            {s.value}
                          </span>{" "}
                          <span className="font-sans text-foreground/70">
                            {s.label}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="mt-10 bg-secondary border-l-2 border-primary p-5 rounded-r-sm">
                  <p className="font-serif italic text-foreground/80 text-base">
                    &ldquo;Wij brengen film, sfeer en beleving samen op unieke
                    plekken in de stad.&rdquo;
                  </p>
                </blockquote>
              </motion.div>
            </div>

            {/* Right: Timeline */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h2 className="font-sans uppercase tracking-[0.25em] text-xs text-primary mb-3">
                  De avond in detail
                </h2>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-10">
                  Een avond die je je nog jaren herinnert.
                </h3>

                <ol className="relative border-l-2 border-primary/20 ml-3">
                  {timeline.map((item, i) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className={`relative pl-8 pb-8 last:pb-0 ${
                        item.highlight ? "" : ""
                      }`}
                    >
                      <span className="absolute -left-[13px] top-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-sans font-semibold ring-4 ring-background">
                        {i + 1}
                      </span>
                      <div
                        className={`rounded-sm border p-4 md:p-5 ${
                          item.highlight
                            ? "bg-primary/5 border-primary/20"
                            : "bg-card border-card-border"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 inline-flex items-center justify-center h-9 px-3 min-w-16 rounded-full bg-primary text-primary-foreground font-sans text-xs tracking-wider whitespace-nowrap">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-primary mb-1">
                              <item.icon className="w-4 h-4" strokeWidth={1.5} />
                              <h4 className="font-sans uppercase tracking-[0.18em] text-xs font-semibold">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-sm text-foreground/75 font-sans leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[strip0, strip1, strip2].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 font-serif italic text-foreground/60">
            Samen maken we van jouw locatie een filmervaring om nooit te vergeten.
          </p>
        </div>
      </section>

      {/* Final CTA / contact */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans uppercase tracking-[0.25em] text-xs text-primary-foreground/80 mb-4">
              Interesse of vragen?
            </h2>
            <h3 className="font-serif text-3xl md:text-5xl leading-tight">
              Laten we samen de mogelijkheden bespreken.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-sm font-sans">
              <a
                href="mailto:info@cineopen.nl"
                data-testid="link-email"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-primary-foreground text-primary hover-elevate active-elevate-2"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                info@cineopen.nl
              </a>
              <a
                href="https://instagram.com/cineopen.nl"
                target="_blank"
                rel="noreferrer"
                data-testid="link-instagram"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground hover-elevate active-elevate-2"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                @cineopen.nl
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-9 bg-primary/90 rounded-sm flex items-center justify-center">
              <Film className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={1.5} />
            </div>
            <span className="font-serif text-base text-primary">Ciné Open</span>
            <span className="font-serif italic text-sm text-foreground/50 hidden md:inline">
              · Meer dan alleen een film.
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-sans">
            &copy; 2026 Ciné Open Rotterdam. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  );
}
