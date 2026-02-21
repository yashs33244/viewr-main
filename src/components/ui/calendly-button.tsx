"use client";

import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function CalendlyButton({
  url,
  children,
  className = "",
}: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`${className} cursor-pointer transition-all duration-200 hover:scale-105`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
      >
        {children}
      </div>

      {mounted && (
        <PopupModal
          url={url}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementsByTagName("body")[0] as HTMLElement}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "6366f1",
            textColor: "4d5055",
          }}
        />
      )}
    </>
  );
}
