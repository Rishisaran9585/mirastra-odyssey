import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirastra Tech — A Cinematic Journey" },
      { name: "description", content: "Travel through Mirastra's futuristic worlds — a cinematic experience built for the year 2035." },
      { property: "og:title", content: "Mirastra Tech — A Cinematic Journey" },
      { property: "og:description", content: "Scroll, fly, and discover the Mirastra universe — services, technology and vision rendered as cinema." },
    ],
  }),
  component: Index,
});

function Index() {
  const [Mod, setMod] = useState<null | { default: React.ComponentType }>(null);
  useEffect(() => {
    import("@/components/cinematic/CinematicExperience").then((m) =>
      setMod({ default: m.default }),
    );
  }, []);

  if (!Mod) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#04030a] text-[#e7c277]">
        <div className="mirastra-eyebrow mirastra-pulse">INITIALIZING MIRASTRA UNIVERSE</div>
        <div className="mt-6 h-px w-40 bg-[#e7c277]/40 overflow-hidden">
          <div className="h-full w-1/2 bg-[#e7c277] animate-[mirastra-pulse_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    );
  }
  const Cinematic = Mod.default;
  return <Cinematic />;
}
