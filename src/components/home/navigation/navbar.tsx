"use client";

import { Container, CalendlyButton } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { calendlyUrl } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Calculate offset for fixed header
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 w-full z-[100] flex justify-center pt-4">
      <div
        className={`transition-all duration-300 relative ${
          scrolled ? "w-[95%] max-w-6xl" : "w-[98%] max-w-7xl"
        }`}
      >
        <div
          className={`relative flex items-center justify-between h-14 px-4 transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-lg border border-border/20 shadow-xl rounded-2xl"
              : "bg-background/40 backdrop-blur-lg border border-border/10 rounded-2xl"
          }`}
        >
          <Container reverse>
            <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl w-full">
              <div className="flex items-start">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/icons/viewr_logo.svg"
                    alt="ViewR"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-lg font-medium">ViewR</span>
                </button>
              </div>

              <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex items-center justify-center gap-8">
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-foreground/80 text-sm transition-colors duration-300 relative group"
                  >
                    Features
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-foreground/80 text-sm transition-colors duration-300 relative group"
                  >
                    Pricing
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-foreground/80 text-sm transition-colors duration-300 relative group"
                  >
                    About
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-foreground/80 text-sm transition-colors duration-300 relative group"
                  >
                    Testimonials
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </button>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <CalendlyButton
                  url={calendlyUrl}
                  className={`${buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })} transition-all duration-300 hover:bg-primary/10`}
                >
                  Book Demo
                </CalendlyButton>
                <CalendlyButton
                  url={calendlyUrl}
                  className={`${buttonVariants({
                    size: "sm",
                    className: "hidden md:flex",
                  })} transition-all duration-300 hover:scale-105`}
                >
                  Get Started
                </CalendlyButton>

                {/* Mobile menu toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-4 right-4 mt-2 bg-background/95 backdrop-blur-lg rounded-2xl p-6 md:hidden border border-border/20 shadow-xl transform origin-top transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
            >
              Testimonials
            </button>

            <div className="border-t border-border/20 pt-4 mt-2">
              <CalendlyButton url={calendlyUrl}>
                <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                  Schedule Call
                </button>
              </CalendlyButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
