"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Calculator,
  Headset,
  Briefcase,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Shield,
  MessageCircle,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Bokföring & Löner",
    description:
      "Vi tar hand om den löpande bokföringen, momsrapporteringen och lönehanteringen – digitalt, effektivt och korrekt.",
    features: [
      "Löpande bokföring",
      "Moms- och arbetsgivardeklarationer",
      "Lönehantering",
      "Digital kvitto- och fakturahantering",
    ],
    color: "from-[#007533] to-[#27AE60]",
  },
  {
    icon: Headset,
    title: "Bokslut & Deklaration",
    description:
      "När året ska sammanställas hjälper vi till med bokslut, årsredovisning och inkomstdeklaration. Du får full kontroll och tydlighet – utan krångel. ",
    features: [
      "Bokslut och årsredovisning",
      "Inkomstdeklarationer",
      "Rådgivning inför nytt räkenskapsår ",
    ],
    color: "from-[#007533] to-[#229954]",
  },
  {
    icon: Briefcase,
    title: "Rapporter & Rådgivning ",
    description:
      "Vi gör siffrorna begripliga och användbara. Med rätt analys och rådgivning får du bättre beslutsunderlag – och mer lönsamhet. ",
    features: [
      "Ekonomisk analys",
      "Likviditets- och resultatrapportering ",
      "Tillväxt- och investeringsplanering",
    ],
    color: "from-[#007533] to-[#1E8449]",
  },
  {
    icon: Users,
    title: "Mentorship för entreprenörer",
    description:
      "Att starta och driva företag kan kännas överväldigande – särskilt i början. Därför erbjuder Kloka Siffror mentorskap för entreprenörer och småföretagare som vill ha stöd, bollplank och vägledning i sin företagsresa.",
    features: [
      "Affärsstrategi och planering",
      "Prissättning, budget och ekonomistyrning",
      "Effektiva rutiner för administration och bokföring",
      "Råd om marknadsföring och kundrelationer",
      "Löpande coachning och uppföljning",
    ],
    color: "from-[#2ECC71] to-[#27AE60]",
    extended: true,
  },
  {
    icon: Headset,
    title: "Virtuell Assistent (VA)",
    description:
      "Behöver du hjälp med administration, sociala medier eller kundkommunikation – men vill slippa anställa? Vår Virtuella Assistent är din flexibla resurs på distans.",
    features: [
      "Administration & back-office (avtal, fakturor, dokument)",
      "E-post, kalender och kundkontakt",
      "Sociala medier – planering, inlägg och publicering",
      "Kundservice och enklare support",
      "Webbuppdateringar och enklare e-handelsstöd",
      "Bokföringsunderlag och kvittohantering",
    ],
    color: "from-[#27AE60] to-[#229954]",
    process: [
      "Vi kartlägger vad du behöver hjälp med",
      "Du väljer mellan fast pris och löpande avtal",
      "Vi startar snabbt – ofta inom några dagar",
    ],
  },
  {
    icon: Building2,
    title: "Bostadsrättsföreningar (BRF)",
    description:
      "Ekonomisk förvaltning för små och medelstora föreningar – tryggt, enkelt och med fasta priser. Vi hjälper styrelser att få ordning, överblick och trygghet i den ekonomiska förvaltningen.",
    features: [
      "Löpande bokföring och avstämningar",
      "Leverantörs- och fakturahantering",
      "Budget",
      "Årsbokslut och årsredovisning (K2/K3)",
      "Rapporter och presentationer till styrelsen",
    ],
    color: "from-[#229954] to-[#1E8449]",
  },
];

const cities = [
  {
    name: "KUNGSHAMN",
    address: "Stenhuggaregatan 1B",
    person: "Scott Lindahl",
    title: "Mentor",
    city: "456 32 Kungshamn",
    phone: "(212) 555-0100",
    email: "scott@klokasiffror.se",
    img: "scott_img.jpg",
  },
  {
    name: "ÖREBRO",
    address: "Ekoxevägen 12",
    person: "Per Aneskans",
    title: "Redovisningsekonom",
    city: "702 30 Örebro",
    phone: "(213) 555-0200",
    email: "per@klokasiffror.se",
    img: "per_img.jpg",
  },
  {
    name: "STOCKHOLM",
    address: "Ekoxevägen 12",
    person: "Ronja Winskog",
    title: "Virtuell Assistent",
    city: "702 30 Örebro",
    phone: "(213) 555-0200",
    email: "per@klokasiffror.se",
    img: "per_img.jpg",
  },
];
const reasons = [
  {
    icon: Award,
    title: "Dokumenterad expertis",
    description:
      "Över 15 års erfarenhet av att hjälpa små och medelstora företag att växa med trygga och beprövade lösningar.",
  },
  {
    icon: Users,
    title: "Personligt & småföretagarvänligt",
    description:
      "Du får en nära samarbetspartner som förstår din vardag, dina utmaningar och dina mål – inga opersonliga standardlösningar.",
  },
  {
    icon: TrendingUp,
    title: "Flexibla tjänster & tydliga priser",
    description:
      "Anpassade upplägg med fasta priser så att du alltid vet vad du betalar för och vilken nytta du får.",
  },
  {
    icon: MessageCircle,
    title: "Digitalt smart – mänskligt nära",
    description:
      "Moderna digitala lösningar kombinerat med personlig kontakt och snabb återkoppling när du behöver det.",
  },
];

export default function Home() {
  return (
    <>
      <div
        className="bg-gradient-to-br 
  from-[#007533] from-0% 
  via-[#007533] via-30% 
  to-[#2ECC71] to-100% text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Redovisning som gör skillnad.
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Vi hjälper små och medelstora företag med redovisning, rådgivning
              och digitala lösningar som frigör tid och skapar trygghet.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8" />
                <span className="text-lg">Redovisning</span>
              </div>
              <div className="flex items-center gap-3">
                <Headset className="w-8 h-8" />
                <span className="text-lg">Mentorship </span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8" />
                <span className="text-lg">Virtuell Assistent</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8" />
                <span className="text-lg">Rådgivning </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*services*/}

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Våra tjänster
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi tar hand om den löpande bokföringen, momsrapporteringen och
              lönehanteringen – digitalt, effektivt och korrekt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${service.color} p-8 text-white min-h-[380px] flex flex-col`}
                  >
                    <Icon className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl sm:text-3xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/*WhyChooseUs*/}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Varför Välja Oss
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi specialiserar oss på heltäckande redovisningstjänster som
              främjar engagemang och tillväxt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#007533] to-[#003824] mb-6 group-hover:shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl text-[#007433] mb-2">
                  100+
                </div>
                <div className="text-gray-600">Nöjda kunder</div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl text-[#007433] mb-2">
                  15+
                </div>
                <div className="text-gray-600">Års erfarenhet</div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl text-[#007433] mb-2">
                  98%
                </div>
                <div className="text-gray-600">Kundnöjdhet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Contact*/}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Kontakta Oss
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Boka en kostnadsfri konsultation med vårt team så sätter vi bollen
              i rullning!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cities.map((location, index) => (
              <motion.div
                key={index}
                className="flex gap-6 bg-gradient-to-br from-gray-50 to-white border-2 border-[#007533]/20 rounded-xl p-6 hover:border-[#00db33] transition-colors duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* LEFT: Text content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-6 h-6 text-[#007533]" />
                    <h3 className="text-xl text-gray-900">{location.name}</h3>
                  </div>

                  <div className="space-y-3 text-gray-600">
                    <p className="text-sm">
                      {location.person}
                      <br />
                      {location.title}
                    </p>

                    {/*                <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#007533]" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-sm hover:text-[#007533] transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>*/}

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#007533]" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-sm hover:text-[#007533] transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Image */}
                <div className="block w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0">
                  <img
                    src={location.img}
                    alt={location.name}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mb-8 pb-8">
            <img
              src="klokasiffror-logo.png"
              alt="Kloka Siffror"
              className="h-20 sm:h-24 lg:h-58 w-auto opacity-95"
            />
          </div>
          <div className="bg-gradient-to-br from-[#007533] to-[#003824] rounded-2xl p-8 sm:p-12 text-white text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl mb-4">Öppettider</h3>
            <div className="space-y-2 text-lg">
              <p>Måndag – Fredag: 08:00 – 18:00</p>
            </div>
            <br />
            <div className="space-y-2 text-lg">
              <p>Boka en konsultation via epost</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
