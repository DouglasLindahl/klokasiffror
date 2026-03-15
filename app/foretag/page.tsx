"use client";
import { useRouter } from "next/navigation";

export default function PaketerPage() {
  const router = useRouter();
  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 text-center">
          <button
            onClick={() => router.push("/")}
            className="absolute left-6 top-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition"
          >
            ← Tillbaka
          </button>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">TJÄNSTER</h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            Våra paket för Aktiebolag (AB) och Enskild Firma (EF) – tydliga,
            fasta lösningar för ordning, kontroll och struktur.
          </p>
        </div>
      </div>

      {/* AB Packages */}
      <div className="py-24 bg-white text-gray-700">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            AKTIEBOLAG (AB)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AB1 Ordning */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">AB1 – ORDNING</h3>
              <p className="mb-2 font-semibold">Från 2 500 kr/mån</p>
              <p className="mb-4">
                För dig som vill att ekonomin ska fungera korrekt och utan
                krångel.
              </p>
              <p className="font-semibold mb-2 mt-4">Passar:</p>
              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Ägarledda aktiebolag</li>
                <li>0–2 anställda</li>
                <li>Företag som vill ha stabil grund</li>
              </ul>
              <p className="font-semibold mb-2 mt-4">Ingår:</p>
              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Löpande bokföring</li>
                <li>Momsredovisning</li>
                <li>Arbetsgivardeklaration (AGI)</li>
                <li>Lön till ägare</li>
                <li>Standardiserad månadsrapport</li>
                <li>Fortnox</li>
              </ul>
            </div>

            {/* AB2 Kontroll */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">AB2 – KONTROLL</h3>
              <p className="mb-2 font-semibold">Från 4 500 kr/mån</p>
              <p className="mb-4">
                För dig som vill ha tydlig överblick utan att arbeta med
                ekonomi.
              </p>
              <p className="font-semibold mb-2 mt-4">Passar:</p>
              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Växande bolag</li>
                <li>1–10 anställda</li>
                <li>Ägare som vill förstå läget löpande</li>
              </ul>
              <p className="font-semibold mb-2 mt-4">Ingår:</p>
              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Allt i ORDNING</li>
                <li>Lönehantering för anställda</li>
                <li>Resultatuppföljning</li>
                <li>Likviditetsöversikt</li>
                <li>Fast kontaktperson</li>
                <li>
                  Tydlig flaggning vid avvikelser eller behov av ägarbeslut
                </li>
              </ul>
            </div>

            {/* AB3 Ägarstruktur */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">AB3 – ÄGARSTRUKTUR</h3>
              <p className="mb-2 font-semibold">Från 8 500 kr/mån</p>
              <p className="mb-4">
                För bolag med holding, flera bolag eller långsiktigt
                ägarperspektiv.
              </p>
              <p className="font-semibold mb-2 mt-4">Passar:</p>
              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Koncerner</li>
                <li>Holdingbolag</li>
                <li>Region- och franchisebolag</li>
                <li>Fastighetsägande bolag</li>
              </ul>
              <p className="font-semibold mb-2 mt-4">Ingår:</p>
              <ul className="space-y-3 text-white/90 list-disc list-outside">
                <li>Allt i KONTROLL</li>
                <li>Koncernbokföring</li>
                <li>Internfakturering</li>
                <li>Struktur för utdelning</li>
                <li>Styrelse- och ägarunderlag</li>
                <li>Årsbokslut och årsredovisning</li>
                <li>Regelbundna strukturkontroller</li>
                <li>Identifiering av beslutskrävande förändringar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* EF Packages */}
      <div className="py-24 bg-gray-50 text-gray-700">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            ENSKILD FIRMA (EF)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EF1 Ordning */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">EF1 – ORDNING</h3>
              <p className="mb-2 font-semibold">Från 1 500 kr/mån</p>
              <p className="mb-4">
                För dig som vill att bokföringen ska fungera korrekt.
              </p>
              <p className="font-semibold mb-2 mt-4">Passar:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Enskilda firmor utan anställda</li>
                <li>Konsulter, hantverkare, tjänsteföretag</li>
                <li>Företagare som vill ha enkel och korrekt hantering</li>
              </ul>
              <p className="font-semibold mb-2 mt-4">Ingår:</p>
              <ul className="list-disc list-inside">
                <li>Löpande bokföring</li>
                <li>Momsredovisning</li>
                <li>Resultatöversikt</li>
                <li>Fortnox</li>
                <li>Årsbokslut enligt överenskommelse</li>
              </ul>
            </div>

            {/* EF2 Kontroll */}
            <div className="bg-gradient-to-br from-[#043724] to-[#1F5F3A] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">EF2 – KONTROLL</h3>
              <p className="mb-2 font-semibold">Från 2 500 kr/mån</p>
              <p className="mb-4">
                För dig som vill ha bättre överblick och uppföljning.
              </p>
              <p className="font-semibold mb-2 mt-4">Passar:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Enskilda firmor med högre omsättning</li>
                <li>Företagare som vill förstå resultat och likviditet</li>
                <li>
                  När verksamheten närmar sig gräns för ombildning till AB
                </li>
              </ul>
              <p className="font-semibold mb-2 mt-4">Ingår:</p>
              <ul className="list-disc list-inside">
                <li>Allt i EF – ORDNING</li>
                <li>Löpande uppföljning</li>
                <li>Resultat- och likviditetsöversikt</li>
                <li>Flaggar när struktur eller bolagsform bör ses över</li>
                <li>Fast kontaktperson</li>
              </ul>
            </div>
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
