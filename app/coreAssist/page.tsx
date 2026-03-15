"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function CoreAssistPage() {
  const router = useRouter();
  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <button
            onClick={() => router.push("/")}
            className="absolute left-6 top-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition"
          >
            ← Tillbaka
          </button>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            CORE ASSIST & ADMINISTRATIVT STÖD
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-6 text-white/90 font-semibold">
            Administrativt stöd som kompletterar ekonomin
          </p>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Vår VA-tjänst är ett praktiskt och operativt stöd, inte rådgivning
            eller management. Den erbjuds som tillägg till våra ekonomipaket
            eller som separat administrativ tjänst.
          </p>
        </div>
      </div>

      {/* Administrative Tasks */}
      <div className="py-24 text-gray-700">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Exempel på VA-uppgifter
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl max-w-3xl mx-auto">
            <li>Underlagshantering till bokföring</li>
            <li>Fakturering och kundregister</li>
            <li>Leverantörsadministration</li>
            <li>Dokumentstruktur och arkivering</li>
            <li>Administration kopplat till Fortnox</li>
          </ul>
          <p className="mt-8 text-center text-lg sm:text-xl font-semibold">
            Pris: från 650 kr/tim eller fast månadsupplägg enligt
            överenskommelse.
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-24 bg-white text-gray-700">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">
            CORE ASSIST & SOCIALA MEDIER
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-center">
            Sociala medier & enklare marknadsadministration – för kunder som
            vill ha grundläggande närvaro, inte kampanjstyrning.
          </p>

          {/* Strategiplan Card */}
          <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Strategiplan – Onboarding (obligatorisk)
            </h3>
            <p className="mb-4 text-lg sm:text-xl">
              Strategiplanen utgör grunden för samarbetet och genomförs innan
              arbetet enligt valt abonnemangspaket påbörjas. Syftet är att
              säkerställa korrekt inriktning, tonalitet och struktur för kundens
              närvaro i sociala medier.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl">
              <li>Definition av målgrupp</li>
              <li>Fastställande av tonalitet</li>
              <li>Innehållsteman</li>
              <li>Genomgång av befintliga eller nya sociala medier</li>
              <li>Eventuell grafisk profil</li>
              <li>Planeringsupplägg</li>
              <li>
                Levereras som PDF inkl. inledande möte och uppföljande möte (max
                30 min)
              </li>
            </ul>
            <p className="mt-4 font-semibold text-lg">
              Pris: 2 000 kr. Fakturering sker i förskott.
            </p>
          </div>

          {/* Subscription Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            {/* Mini */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Abonnemang – Mini</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Planering & kreativt innehåll enligt strategiplan</li>
                <li>Layout & grafisk design av inlägg</li>
                <li>Publicering & schemaläggning (1–2 inlägg/vecka)</li>
                <li>Månatligt strategiskt uppföljningsmöte</li>
              </ul>
              <p className="mt-4 font-semibold">
                Pris: 2 400 kr/mån, bindningstid 3 månader
              </p>
            </div>

            {/* Bas */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Abonnemang – Bas</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Allt i Mini</li>
                <li>Publicering & schemaläggning (1–3 inlägg/vecka)</li>
                <li>Engagemang & interaktion med följare vid behov</li>
                <li>Månadsrapport via e-post</li>
              </ul>
              <p className="mt-4 font-semibold">
                Pris: 4 800 kr/mån, bindningstid 3 månader
              </p>
            </div>

            {/* Plus */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Abonnemang – Plus</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Allt i Bas</li>
                <li>Publicering & schemaläggning enligt överenskommen plan</li>
                <li>Löpande omfattande hantering av sociala medier</li>
              </ul>
              <p className="mt-4 font-semibold">
                Pris: 9 600 kr/mån, bindningstid 3 månader
              </p>
            </div>
          </div>

          {/* Material Delivery */}
          <div className="mt-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Leverans av material
            </h3>
            <p className="text-lg sm:text-xl text-center">
              Kunden ansvarar för att leverera bilder, filmer och eventuella
              texter via:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
              <li>E-post</li>
              <li>WeTransfer</li>
              <li>Delad molntjänst (t.ex. Google Drive)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm py-4">
        Org.Nr: 559521-6481 - &copy; 2026 Kloka Siffror AB - Website by Invicom.
      </div>
    </>
  );
}
