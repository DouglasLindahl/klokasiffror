"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function BRFPage() {
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
            BRF – EKONOMISK FÖRVALTNING
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-6 text-white/90 font-semibold">
            Ekonomisk förvaltning med tydlig struktur och fasta arbetssätt
          </p>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Kloka Siffror erbjuder ekonomisk förvaltning för
            bostadsrättsföreningar som vill ha{" "}
            <strong className="text-white font-semibold">
              ordning, transparens och förutsägbarhet
            </strong>
            . Vi utför den löpande ekonomiska hanteringen och rapporterar enligt
            avtalad struktur. Beslut och yttersta ansvar ligger alltid hos
            föreningens styrelse.
          </p>
        </div>
      </div>

      {/* What’s included */}
      <div className="py-24 bg-white text-gray-700">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Vad ingår i BRF-paketet
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl max-w-3xl mx-auto">
            <li>Löpande bokföring</li>
            <li>Månads- eller kvartalsrapportering</li>
            <li>Kund- och leverantörsfakturahantering</li>
            <li>Inkomstdeklaration (INK3)</li>
            <li>Fortnox</li>
          </ul>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
            Prisstruktur BRF
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                <strong>Per lägenhet:</strong> 1 250 kr/år (1 000 kr exkl. moms)
              </p>
              <p>
                <strong>Minimipris:</strong> 15 000 kr/år (12 000 kr exkl. moms)
              </p>
              <p>
                <strong>Överlåtelseavgift:</strong> 50 % av aktuell årsavgift
              </p>
              <p>
                <strong>Oäkta BRF:</strong> Samtliga priser +50 %
              </p>
            </div>

            <div className="space-y-4">
              <p>
                <strong>Årsredovisning & bokslut:</strong>
              </p>
              <p>K2 – Årsredovisning: 12 750 kr (10 200 kr exkl. moms)</p>
              <p>K3 – Första året: 24 750 kr (19 800 kr exkl. moms)</p>
              <p>Digital bokslutsgenomgång ingår.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Structure-related Add-ons */}
      <div className="py-24 bg-white text-gray-700">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Strukturrelaterade tillägg
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl max-w-3xl mx-auto">
            <li>Mäklarbild: 950 kr</li>
            <li>Överlåtelseavtal: 950 kr</li>
            <li>Garage-/parkeringskö: 950 kr/mån</li>
            <li>Budgetarbete: offert</li>
            <li>
              Strukturkontroll vid förändring (t.ex. K2/K3, större projekt)
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm py-4">
        Org.Nr: 559521-6481 - &copy; 2026 Kloka Siffror AB - Website by Invicom.
      </div>
    </>
  );
}
