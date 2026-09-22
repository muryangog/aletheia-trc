import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import PortalCards from "./PortalCards";
import Programs from "./Programs";

export default function HomeView() {
  return (
    <main className="bg-(--color-background) text-(--color-foreground) min-h-screen transition-colors duration-300">
      <Hero />
      <Welcome />
      <PortalCards />
      <Programs />
    </main>
  );
}
