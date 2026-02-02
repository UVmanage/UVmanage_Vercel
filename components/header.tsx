"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-foreground">
          UVmanage
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection("results")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Results
          </button>
          <Button
            onClick={() => scrollToSection("survey")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Results
            </button>
            <Button
              onClick={() => scrollToSection("survey")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
