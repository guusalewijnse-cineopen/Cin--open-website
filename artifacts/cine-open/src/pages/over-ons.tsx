import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Film, Mail, Phone, Instagram } from "lucide-react";
import skylineImg from "@/assets/rotterdam-skyline.png";
import logoMark from "@/assets/logo-mark-clean.png";

export default function OverOns() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top nav */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link href="/">
            <button
              data-testid="link-home"
              className="flex items-center gap-3 group"
            >
              <img
                src={logoMark}
                alt="Ciné Open"
                className="h-12 w-auto"
              />
            </button>
          </Link>
          <Link href="/">
            <button
              data-testid="link-back"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-sans text-xs md:text-sm uppercase tracking-[0.2em] group"
            >
              <ArrowLeft
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
              Terug
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-12">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="font-sans uppercase tracking-[0.25em] text-xs text-primary mb-4 block">
              Het verhaal
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[0.95]">
              Over ons
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-serif italic text-foreground/70">
              Meer dan alleen een film.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual band */}
      <section className="relative">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[16/7] md:aspect-[16/6] rounded-md overflow-hidden shadow-xl"
          >
            <img
              src={skylineImg}
              alt="Rotterdam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 lg:col-start-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-6 text-base md:text-lg text-foreground/80 font-sans leading-relaxed"
              >
                <p>
                  Ciné Open is ontstaan vanuit een simpele gedachte: een
                  filmavond hoort bijzonder te zijn. Niet een avond waarbij je
                  in een rij staat, anoniem plaatsneemt en daarna snel naar
                  buiten loopt, maar een avond die je onthoudt.
                </p>
                <p>
                  We wonen al jaren in Rotterdam en kennen de hoeken, de
                  uitzichten en de plekken die je eigenlijk alleen kent als je
                  er echt woont. Die plekken willen we laten zien, niet als
                  decor, maar als hoofdrolspeler.
                </p>
                <p>
                  Het concept is bewust klein gehouden. Maximaal zo'n 125
                  stoelen, uitsluitend op privélocaties, met geluid via
                  koptelefoons zodat de omgeving er geen last van heeft. Geen
                  festival, geen massa-evenement. Gewoon een goed
                  georganiseerde avond met mensen die er bewust voor gekozen
                  hebben.
                </p>
                <p>
                  Deze zomer spelen we op een handvol zorgvuldig geselecteerde
                  locaties in Rotterdam. We zijn nog volop in gesprek. Wil je
                  op de hoogte blijven of meedenken? Stuur gerust een bericht.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-14 pt-10 border-t border-border"
              >
                <h3 className="font-sans uppercase tracking-[0.25em] text-xs text-primary mb-6">
                  Oprichters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-card border border-card-border rounded-sm p-5">
                    <p className="font-serif text-xl text-foreground italic">
                      Justin Pries
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground font-sans">
                      Oprichter, Ciné Open
                    </p>
                  </div>
                  <div className="bg-card border border-card-border rounded-sm p-5">
                    <p className="font-serif text-xl text-foreground italic">
                      Guus Alewijnse
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground font-sans">
                      Oprichter, Ciné Open
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4 text-sm font-sans">
                  <a
                    href="mailto:info@cineopen.nl"
                    data-testid="link-email"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-primary text-primary-foreground hover-elevate active-elevate-2"
                  >
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                    info@cineopen.nl
                  </a>
                  <a
                    href="tel:+31641873246"
                    data-testid="link-phone"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-border text-foreground hover-elevate active-elevate-2"
                  >
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                    +31 6 4187 3246
                  </a>
                  <a
                    href="https://instagram.com/cineopen.nl"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-instagram"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-border text-foreground hover-elevate active-elevate-2"
                  >
                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                    @cineopen.nl
                  </a>
                </div>
              </motion.div>
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
          </div>
          <p className="text-xs text-muted-foreground font-sans">
            &copy; 2026 Ciné Open Rotterdam. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  );
}
