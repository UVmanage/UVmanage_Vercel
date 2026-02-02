"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { SurveyForm } from "@/components/survey-form";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { TypeformLeadEmbed } from "@/components/TypeformLeadEmbed";

export default function Home() {
  useEffect(() => {
    // Scroll to hero section on page load
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Services />
      <Process />
      <Results />
      <TypeformLeadEmbed />
      <FAQ />
      <Footer />
    </main>
  );
}
