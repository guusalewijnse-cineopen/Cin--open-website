import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import skylineImg from "@/assets/rotterdam-skyline.png";

export default function OverOns() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="film-grain"></div>

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
        <Link href="/">
          <button className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-sans text-sm uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            Terug
          </button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={skylineImg}
            alt="Rotterdam"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-sans tracking-[0.2em] text-xs uppercase mb-4 block">Het verhaal</span>
            <h1 className="text-5xl md:text-7xl font-serif">Over ons</h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-lg text-foreground/80 font-light font-sans leading-relaxed"
            >
              <p>
                Ciné Open is ontstaan vanuit een simpele gedachte: een filmavond hoort bijzonder te zijn. Niet een avond waarbij je in een rij staat, anoniem plaatsneemt en daarna snel naar buiten loopt — maar een avond die je onthoudt.
              </p>
              <p>
                Ik woon al 23 jaar in Rotterdam, op drie verschillende plekken in de stad. Ik ken de hoeken, de uitzichten en de plekken die je eigenlijk alleen kent als je er echt woont. Die plekken willen we laten zien — niet als decor, maar als hoofdrolspeler.
              </p>
              <p>
                Het concept is bewust klein gehouden. Maximaal 125 stoelen, uitsluitend op privélocaties, met geluid via koptelefoons zodat de omgeving er geen last van heeft. Geen festival, geen massa-evenement. Gewoon een goed georganiseerde avond met mensen die bewust voor die avond gekozen hebben.
              </p>
              <p>
                Deze zomer spelen we op een handvol zorgvuldig geselecteerde locaties in Rotterdam. We zijn nog volop in gesprek. Wil je op de hoogte blijven of meedenken? Stuur gerust een bericht.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 pt-10 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row gap-10">
                <div>
                  <p className="font-serif text-xl text-foreground/60 italic mb-1">Justin Pries</p>
                  <p className="text-sm text-foreground/40 font-sans">Oprichter, Ciné Open</p>
                </div>
                <div>
                  <p className="font-serif text-xl text-foreground/60 italic mb-1">Guus Alewijnse</p>
                  <p className="text-sm text-foreground/40 font-sans">Oprichter, Ciné Open</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 text-sm font-sans text-foreground/50">
                <a href="mailto:info@cine-open.nl" className="hover:text-primary transition-colors">info@cine-open.nl</a>
                <a href="tel:+31641873246" className="hover:text-primary transition-colors">+31 6 4187 3246</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
