import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, MapPin, Ticket, Headphones, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import cinemaSetupImg from "@/assets/cinema-setup.png";
import skylineImg from "@/assets/rotterdam-skyline.png";
import projectorImg from "@/assets/projector-beam.png";
import rooftopImg from "@/assets/rooftop-night.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const locations = [
    { name: "SS Rotterdam", desc: "Iconisch schip, adembenemend dek." },
    { name: "Excelsior Stadion", desc: "Voetbalsfeer ontmoet art house." },
    { name: "Aloha / Tropicana", desc: "Rotterdams legendarische oase." },
    { name: "The Rooftop at GHG", desc: "Panoramisch uitzicht over de stad." },
    { name: "Dudok in het Park", desc: "Verscholen in het groen." },
    { name: "Maaskantine", desc: "Rauw en industrieel aan de rivier." },
    { name: "Floats", desc: "Drijvend op het water." },
  ];

  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Film grain texture */}
      <div className="film-grain"></div>

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-end">
        <Link href="/over-ons">
          <button className="text-foreground/50 hover:text-primary transition-colors font-sans text-sm uppercase tracking-widest">
            Over ons
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <img 
            src={skylineImg} 
            alt="Rotterdam Skyline" 
            className="w-full h-full object-cover opacity-40 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          {/* Amber glow */}
          <div className="ambient-light bg-primary/20 w-[600px] h-[600px] top-[-200px] left-1/2 -translate-x-1/2"></div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground mb-6 drop-shadow-2xl">
              Ciné Open
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Rotterdam's meest intieme buitenbioscoop. 
              <br className="hidden md:block"/> De filmavond zoals die hoort te zijn.
            </p>
          </motion.div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ChevronDown className="mx-auto text-primary/60 w-8 h-8 animate-bounce" strokeWidth={1} />
          </motion.div>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-32 relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
                Geen massa.<br/>
                <span className="text-primary italic">Alleen de film en jij.</span>
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 font-light font-sans leading-relaxed">
                <p>
                  Ciné Open brengt de magie van cinema terug naar de essentie. Geen eindeloze rijen, geen afleiding. Gewoon een zorgvuldig geselecteerde locatie in Rotterdam, maximaal 125 gasten, en de zwoele zomeravond.
                </p>
                <p>
                  Plof neer in een comfortabele strandstoel met een warme deken. Zet je silent disco-koptelefoon op en laat je meeslepen door de film, terwijl de stad langzaam in het donker verdwijnt.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 text-primary">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl">Silent Cinema</h3>
                  <p className="text-sm text-foreground/60 font-sans">Kristalhelder geluid zonder omgevingslawaai.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 text-primary">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl">Intiem</h3>
                  <p className="text-sm text-foreground/60 font-sans">Strikt gelimiteerd tot ±125 plekken per avond.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src={cinemaSetupImg} 
                alt="Cinema setup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Interlude */}
      <section className="py-24 relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-20">
          <img src={projectorImg} alt="Projector" className="w-full h-full object-cover mix-blend-screen" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-primary italic leading-tight"
          >
            "Het zachte licht van de projector, de skyline in de Maas. Een filmavond zoals je die nog nooit hebt beleefd."
          </motion.h3>
        </div>
      </section>

      {/* Locations Carousel/Grid */}
      <section className="py-32 bg-background relative">
        <div className="ambient-light bg-primary/10 w-[800px] h-[800px] top-0 right-[-300px]"></div>
        
        <div className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Unieke Locaties</h2>
            <p className="text-xl text-foreground/70 font-light max-w-2xl">
              We transformeren de mooiste verborgen en iconische plekken van Rotterdam tot jouw persoonlijke bioscoop.
            </p>
          </motion.div>
        </div>

        <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
          <div className="flex gap-6 px-6 md:px-12 w-max">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-[300px] md:w-[400px] aspect-[4/3] rounded-sm relative group overflow-hidden bg-secondary border border-white/5 flex flex-col justify-end p-6"
              >
                {/* Image background for variety. We'll use the rooftop image for the first one as an example, and fallbacks for others. */}
                {i === 0 || i === 3 ? (
                  <img src={rooftopImg} alt={loc.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background opacity-80 group-hover:scale-105 transition-transform duration-1000"></div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-sans">Rotterdam</span>
                  </div>
                  <h4 className="text-2xl font-serif mb-2">{loc.name}</h4>
                  <p className="text-foreground/70 font-sans text-sm font-light">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-32 relative bg-secondary border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-background/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-16 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Wees als eerste</h2>
              <p className="text-lg text-foreground/70 font-light">
                Tickets kosten vanaf €17,50 — dezelfde prijs als een reguliere bioscoop, maar een onvergelijkbare ervaring. Meld je aan voor vroege toegang.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input 
                  type="email" 
                  placeholder="Jouw e-mailadres" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 border-white/20 h-14 text-lg focus-visible:ring-primary/50"
                />
                <Button type="submit" size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-sans uppercase tracking-wider text-sm transition-all hover:scale-105">
                  Hou mij op de hoogte <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20"
              >
                <h4 className="text-2xl font-serif text-primary mb-2">Bedankt voor je interesse.</h4>
                <p className="text-foreground/80 font-light">Je staat op de lijst. We nemen contact op zodra de kaartverkoop start.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-serif mb-6 text-foreground/80">Ciné Open</h2>
          <div className="flex justify-center gap-8 text-sm font-sans text-foreground/50 mb-8">
            <a href="mailto:info@cine-open.nl" className="hover:text-primary transition-colors">info@cine-open.nl</a>
            <a href="tel:+31641873246" className="hover:text-primary transition-colors">+31 6 4187 3246</a>
          </div>
          <p className="text-xs text-foreground/40 font-sans">
            &copy; 2025 Ciné Open Rotterdam. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>

      {/* Global styles for hide-scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
}
