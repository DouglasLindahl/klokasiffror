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
  Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { image } from "framer-motion/client";

const packages = [
  {
    icon: Calculator,
    title: (
      <>
        Paket 1 - <br />
        ORDNING
      </>
    ),
    description:
      "För dig som vill att ekonomin ska fungera korrekt och utan krångel",
    features: [
      "Ägarledda aktiebolag",
      "0-2 anställda",
      "Företag som vill ha stabil grund",
    ],
    image: "/klokasiffror_img_1.jpg",
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
  {
    icon: Calculator,
    title: (
      <>
        Paket 2 - <br />
        KONTROLL
      </>
    ),
    description:
      "För dig som vill ha tydlig överblick utan att arbeta med ekonomi",
    features: [
      "Växande bolag",
      "1-10 anställda",
      "Ägare som vill förså läget löpande",
    ],
    image: "/klokasiffror_img_2.jpg",
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
  {
    icon: Calculator,
    title: (
      <>
        Paket 3 - <br />
        ÄGARSTRUKTUR
      </>
    ),
    description:
      "För bolag med holding, flera bolag eller långsiktigt ägarperspektiv",
    features: ["Koncerner", "Holdingbolag", "Region- och franchisebolag"],
    image: "/klokasiffror_img_5.jpg",
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
];

const cities = [
  {
    name: "ÖREBRO",
    address: "Ekoxevägen 12",
    person: "Per Aneskans",
    title: "Redovisningskonsult",
    city: "702 30 Örebro",
    phone: "(213) 555-0200",
    email: "per@klokasiffror.se",
    img: "per_img.jpg",
    responsibilities: [
      "Den löpande redovisningen",
      "Bokslut och årsredovisning",
      "Kvalitet i leveransen",
      "Kundens dagliga kontakt",
    ],
  },
  {
    name: "KUNGSHAMN",
    address: "Stenhuggaregatan 1B",
    person: "Scott Lindahl",
    title: "Grundare & Affärsarkitekt",
    city: "456 32 Kungshamn",
    phone: "(212) 555-0100",
    email: "scott@klokasiffror.se",
    img: "scott_img2.png",
    responsibilities: [
      "Struktur",
      "Paketering",
      "Ägar- och bolagslogik",
      "Kvalitetssäkring",
    ],
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div
        className="bg-gradient-to-br 
  from-[#007533] from-0% 
  via-[#007533] via-30% 
  to-[#2ECC71] to-100% text-white "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 pb-28 ">
          <div className="text-center">
            <div className="flex justify-center mb-8 pb-8">
              <img
                src="test2.png"
                alt="Kloka Siffror"
                className="h-32 sm:h-38 lg:h-48 w-auto opacity-95"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Redovisning som gör skillnad.
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Kloka Siffror är en redovisningsbyrå som arbetar med fasta paket
              och tydliga arbetssätt. Vi utför och strukturerar det ekonomiska
              arbetet, följer upp och rapporterar.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <button
                onClick={() => {
                  router.push("/foretag");
                }}
                className="cursor-pointer flex items-center gap-3"
              >
                <Briefcase className="w-8 h-8" />
                <span className="text-lg">Företag</span>
              </button>
              <button
                onClick={() => {
                  router.push("/brf");
                }}
                className="cursor-pointer flex items-center gap-3"
              >
                <Calculator className="w-8 h-8" />
                <span className="text-lg">BRF </span>
              </button>
              <button
                onClick={() => {
                  router.push("/coreAssist");
                }}
                className="cursor-pointer flex items-center gap-3"
              >
                <Headset className="w-8 h-8" />
                <span className="text-lg">Core Assist</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*How we work 1*/}

      {/* How we work */}

      <div className="py-24 bg-gray-50">
        <div className="px-6 sm:px-8 lg:px-12 lg:mx-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Level 1 */}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div
              className="bg-gradient-to-br 
  from-[#007533] from-0% 
  via-[#007533] via-30% 
  to-[#2ECC71] to-100%  p-8 text-white"
            >
              <Shield className="w-12 h-12 mb-4" />

              <h3 className="text-2xl sm:text-3xl mb-3">
                Nivå 1 – Kärnleverans
              </h3>

              <p className="text-white/90">Alla kunder börjar här.</p>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-gray-600 text-lg">
                Detta är grunden i vårt samarbete och består av:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">Fasta paket</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">
                    Tydligt definierad leverans
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">
                    Strukturerade arbetsflöden
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">Löpande uppföljning</span>
                </li>
              </ul>

              <p className="text-gray-600 text-lg">
                Vi tar hand om bokföring, moms och löner – digitalt, effektivt
                och korrekt.
              </p>
            </div>
          </div>

          {/* Level 2 */}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="bg-gradient-to-br from-[#2A9036] to-[#043724] p-8 text-white">
              <TrendingUp className="w-12 h-12 mb-4" />

              <h3 className="text-2xl sm:text-3xl mb-3">
                Nivå 2 – Fördjupade insatser
              </h3>

              <p className="text-white/90">Extra stöd när det behövs.</p>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-gray-600 text-lg">
                Utöver våra paket erbjuder vi även:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">Extra genomgångar</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">
                    Projektbaserade insatser
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">Fördjupade analyser</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2EDB4A]" />
                  <span className="text-gray-700">Konsultation</span>
                </li>
              </ul>

              <p className="text-gray-600 text-lg">
                Fördjupade insatser sker alltid som ett separat tillägg till
                paketen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*packages*/}
      <div className="py-24 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 lg:mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((service, index) => {
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
                  <div className="relative min-h-[300px] flex flex-col justify-end">
                    {/* Background Image */}

                    <img
                      src={service.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Green Overlay */}

                    <div className="absolute inset-0 bg-[#2A9036]/80" />

                    {/* Content */}

                    <div className="relative p-8 text-white">
                      <h3 className="text-2xl sm:text-3xl mb-3">
                        {service.title}
                      </h3>

                      <p className="text-white/90">{service.description}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-lg  my-2">Passar: </h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-[#2EDB4A] flex-shrink-0 mt-0.5" />
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

      {/*In depth*/}
      <div className="py-24 bg-gradient-to-br from-[#043724] to-[#1F5F3A] ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 lg:mx-10 ">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col justify-between">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                BRF – EKONOMISK FÖRVALTNING
              </h2>

              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-semibold leading-relaxed">
                Ekonomisk förvaltning med tydlig struktur och fasta arbetssätt
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Kloka Siffror erbjuder ekonomisk förvaltning för
                bostadsrättsföreningar som vill ha
                <strong className="text-white font-semibold">
                  {" "}
                  ordning, transparens och förutsägbarhet
                </strong>
                .
              </p>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Vi utför den löpande ekonomiska hanteringen och rapporterar
                enligt avtalad struktur. Beslut och yttersta ansvar ligger
                alltid hos föreningens styrelse.
              </p>
            </div>

            {/* List */}
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Detta ingår vanligtvis
              </h3>

              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Löpande bokföring</li>
                <li>Månads- och kvartalsrapportering</li>
                <li>Budget och prognosarbete</li>
                <li>Årsredovisning och deklaration</li>
              </ul>
            </div>
            <div className="width-full flex justify-center pt-10">
              <button
                onClick={() => {
                  router.push("/brf");
                }}
                className="cursor-pointer flex items-center gap-3 text-white border-2 border-solid border-white px-4 py-1 rounded-lg hover:bg-white hover:text-[#1F5F3A]"
              >
                <span className="text-lg">Läs mer</span>
              </button>
            </div>
          </div>

          {/* CORE ASSIST */}

          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col justify-between">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                CORE ASSIST
                <span className="block text-lg font-medium text-white/70 mt-2">
                  Virtuell assistent
                </span>
              </h2>

              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-semibold leading-relaxed">
                Operativt stöd som frigör tid <br></br> och skapar struktur
              </p>
            </div>

            {/* Description */}

            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Core Assist är Kloka Siffrors administrativa stödfunktion och
                arbetar med
                <strong className="font-semibold text-white">
                  {" "}
                  praktiska, operativa uppgifter{" "}
                </strong>
                som kompletterar den ekonomiska leveransen.
              </p>
            </div>

            {/* Grid */}

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Column 1 */}

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Administrativt stöd
                </h3>

                <ul className="space-y-3 text-white/90 list-disc list-outside">
                  <li>Underlagshantering till bokföring</li>
                  <li>Fakturering och kundregister</li>
                  <li>Leverantörsadministration</li>
                  <li>Dokumentstruktur och arkivering</li>
                </ul>
              </div>

              {/* Column 2 */}

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Sociala medier & enklare marknadsadministration
                </h3>

                <ul className="space-y-3 text-white/90 list-disc list-outside">
                  <li>Publicering enligt innehållsplan</li>
                  <li>Enklare text- och bildhantering</li>
                  <li>Schemaläggning</li>
                  <li>Grundläggande uppföljning</li>
                </ul>
              </div>
            </div>
            <div className="width-full flex justify-center pt-10 ">
              <button
                onClick={() => {
                  router.push("coreAssist");
                }}
                className="cursor-pointer flex items-center gap-3 text-white border-2 border-solid border-white px-4 py-1 rounded-lg hover:bg-white hover:text-[#1F5F3A]"
              >
                <span className="text-lg">Läs mer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*About Us*/}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — TEXT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              OM OSS
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Kloka Siffror arbetar med företag och bostadsrättsföreningar som
              vill ha
              <strong className="text-gray-900 font-semibold">
                {" "}
                ordning, struktur och långsiktighet{" "}
              </strong>
              i sin ekonomi.
            </p>

            <div className="mt-10">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Vi tror på:
              </p>

              <ul className="space-y-3 list-disc list-inside text-gray-700 text-lg">
                <li>tydliga arbetssätt</li>
                <li>fasta paket</li>
                <li>långsiktiga relationer</li>
                <li>korrekt utförande</li>
                <li>tydlig rollfördelning</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="relative">
            <img
              src="/klokasiffror_img_3.jpg" // change this path
              alt="Kloka Siffror"
              className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
            />
          </div>
        </div>
      </div>

      {/*Our Team*/}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Vårt team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Boka en kostnadsfri konsultation med vårt team så sätter vi bollen
              i rullning!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cities.map((location, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row gap-6 bg-gradient-to-br from-gray-50 to-white border-2 border-[#2A9036]/20 rounded-xl p-6 hover:border-[#00db33] transition-colors duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* TEXT */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl text-gray-900 mb-4">
                    {location.title}
                  </h3>

                  {/* Image (mobile position) */}
                  <div className="md:hidden w-32 h-32 mb-6">
                    <img
                      src={location.img}
                      alt={location.name}
                      className="w-full h-full object-cover object-top rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 text-gray-600">
                    <p className="font-semibold text-gray-900">
                      {location.person}
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                      {location.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#2A9036]" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-sm hover:text-[#2A9036] transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image (desktop position) */}
                <div className="hidden md:block w-32 h-32 flex-shrink-0">
                  <img
                    src={location.img}
                    alt={location.name}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/*rollfördelning*/}
          <div className="max-w-3xl mx-auto px-6 pb-16 text-center">
            <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Kloka Siffror utför, strukturerar och följer upp det ekonomiska
                arbetet <br></br> enligt avtal och gällande regelverk.
              </p>

              <p>
                Vi tillhandahåller rapporter, underlag och flaggar vid
                avvikelser <br></br> eller förändringar som kräver beslut.
              </p>

              <p>
                Beslut, godkännande och det yttersta ansvaret ligger alltid{" "}
                <br></br> hos kundens ägare, styrelse eller firmatecknare.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8 pb-8">
            <img
              src="klokasiffror-logo.png"
              alt="Kloka Siffror"
              className="h-20 sm:h-24 lg:h-58 w-auto opacity-95"
            />
          </div>
          <div className="bg-gradient-to-br from-[#2A9036] to-[#043724] rounded-2xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl mb-4">Kontakt</h3>
            <br />
            <div className="space-y-2 text-lg">
              <p>
                Vill du veta vilket upplägg som passar bäst för ditt bolag eller
                din förening?
              </p>
              <br />

              <p>Kontakt via e-post</p>
              <p>Telefon enligt överesnkommelse</p>
              <br />
              <p>Vi börjar alltid med att säkerställa rätt struktur</p>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4">
        Org.Nr: 559521-6481 - &copy; 2026 Kloka Siffror AB - Website by Invicom.
      </div>
    </>
  );
}
