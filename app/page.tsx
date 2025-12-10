"use client";
import { motion } from "framer-motion";

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
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Boköring & Löner",
    description:
      "Vi erbjuder professionell hjälp med löpande bokföring och momsdeklarationer.",
    features: ["Löpande bokföring", "Momsdeklaratione", "Rredovisning"],
    color: "from-[#2ECC71] to-[#27AE60]",
  },
  {
    icon: Headset,
    title: "Bokslut & Deklaration",
    description:
      "Har du koll på den löpande bokföringen men behöver stöd med årsredovisningen?",
    features: [
      "löpande bokföringen",
      "årsredovisningen",
      "Inkomstdeklarationen",
    ],
    color: "from-[#27AE60] to-[#229954]",
  },
  {
    icon: Briefcase,
    title: "Rapporter & Rådgivning",
    description: "Behöver du rådgivning inför en eventuell investering?",
    features: ["rådgivning", "eventuell investering", "företagets ekonomi"],
    color: "from-[#229954] to-[#1E8449]",
  },
];

const cities = [
  {
    name: "KUNGSHAMN",
    address: "Stenhuggaregatan 1B",
    city: "456 32 Kungshamn",
    phone: "(212) 555-0100",
    email: "hello@klokasiffror.com",
  },
  {
    name: "ÖREBRO",
    address: "Ekoxevägen 12",
    city: "702 30 Örebro",
    phone: "(213) 555-0200",
    email: "hello@klokasiffror.com",
  },
];
const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Over 15 years of experience delivering exceptional results for businesses of all sizes.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Certified professionals committed to understanding and achieving your business goals.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes that directly impact your bottom line and growth.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Your data and financial information are protected with industry-leading security measures.",
  },
];

export default function Home() {
  return (
    <>
      {/*hero*/}
      <div className=" relative bg-gradient-to-br from-[#2ECC71] to-[#27AE60] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 ">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              KLOKA SIFFROR AB
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Följ med oss och upplev den klarhet som kommer med att förstå dina
              siffror!
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8" />
                <span className="text-lg">Redovisning</span>
              </div>
              <div className="flex items-center gap-3">
                <Headset className="w-8 h-8" />
                <span className="text-lg">Virtuel Assistent</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8" />
                <span className="text-lg">Konsultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*services*/}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Våra tjänster
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertis som leder till framgång – oavsett om det gäller att
              starta, investera eller växa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                    className={`bg-gradient-to-br ${service.color} p-8 text-white`}
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
              Varfor Valja Oss
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
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] mb-6 group-hover:shadow-lg">
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
                <div className="text-4xl sm:text-5xl text-[#2ECC71] mb-2">
                  500+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl text-[#2ECC71] mb-2">
                  15+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl text-[#2ECC71] mb-2">
                  98%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
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

          <div className="flex flex-wrap gap-8 mb-16">
            {cities.map((location, index) => (
              <motion.div
                key={index}
                className="flex-1 min-w-[260px] bg-gradient-to-br from-gray-50 to-white border-2 border-[#2ECC71]/20 rounded-xl p-6 hover:border-[#2ECC71] transition-colors duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-[#2ECC71]" />
                  <h3 className="text-xl text-gray-900">{location.name}</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="text-sm">
                    {location.address}
                    <br />
                    {location.city}
                  </p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#2ECC71]" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-sm hover:text-[#2ECC71] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#2ECC71]" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-sm hover:text-[#2ECC71] transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-2xl p-8 sm:p-12 text-white text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl mb-4">Oppettider</h3>
            <div className="space-y-2 text-lg">
              <p>mandag - Fredag: 8:00 - 18:00</p>
              <p>Sondag: 9:00 - 14:00</p>
              <p>Sondag: Stangt</p>
            </div>
            <div className="mt-8">
              <a
                href="mailto:info@businesssolutions.com"
                className="inline-block bg-white text-[#2ECC71] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Boka en konsultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
