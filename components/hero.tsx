"use client";

import { Button } from "@/components/ui/button";
import { CalendarClock, LockKeyholeOpen, BadgeDollarSign  } from "lucide-react";

export function Hero() {
  const scrollToSurvey = () => {
    const element = document.getElementById("survey");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
          FOR CREATORS TIRED OF DOING EVERYTHING THEMSELVES
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Turn Your OnlyFans Into a System Not a Second <br /> <span className="text-primary">Full-Time Job</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 text-pretty">
          If you’re doing $2k–$10k/month but feel capped by chatting, posting, and daily ops — we remove every backend bottleneck so your only job is to create content.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToSurvey}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            Book A Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("services");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-border text-foreground hover:bg-secondary"
          >
            Our Services
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
              <CalendarClock size={48} />
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              30-day trial agreement
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
              <BadgeDollarSign size={48} />
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              <div>You keep 100% of revenue</div>
              <div>if you walk away</div>
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
              <LockKeyholeOpen size={48} />
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              No long-term lock-in
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
