import { createFileRoute } from "@tanstack/react-router";
import LithosHero from "../components/sections/LithosHero";
import ToonhubCarousel from "../components/sections/ToonhubCarousel";
import AetheraHero from "../components/sections/AetheraHero";
import OrbisNft from "../components/sections/OrbisNft";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirastra Showcase — Premium Interfaces" },
      { name: "description", content: "Experience next-generation interactive designs: Lithos Spotlight, Toonhub Carousel, Aethera Loop, and Orbis NFT Space." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="w-full bg-black text-white min-h-screen">
      {/* Concept 1: Spotlight Reveal Hero (Lithos Geology theme) */}
      <LithosHero />

      {/* Concept 2: Rotating 3D Figurines Carousel (Toonhub theme) */}
      <ToonhubCarousel />

      {/* Concept 3: Seamless manual loops video background hero (Aethera theme) */}
      <AetheraHero />

      {/* Concept 4: Deep dark space glassmorphic layouts (Orbis.Nft theme) */}
      <OrbisNft />
    </main>
  );
}
