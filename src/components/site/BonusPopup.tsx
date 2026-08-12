import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export const BonusPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure smooth page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center md:items-end md:justify-end p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm md:hidden"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <div className="relative z-50 w-full max-w-sm md:max-w-xs bg-gradient-to-br from-[#25D366] to-[#1ebe57] rounded-2xl shadow-2xl p-6 md:p-5 text-white animate-in fade-in slide-in-from-bottom-4 duration-500 md:mb-6 md:mr-6">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 md:top-2 md:right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 md:h-4 md:w-4" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-3">
            <div className="text-4xl md:text-3xl font-extrabold mb-1">🎁</div>
            <h2 className="text-3xl md:text-2xl font-extrabold leading-tight">
              100% BONUS
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-sm md:text-xs font-medium text-white/90 mb-5 md:mb-4">
            Claim your 100% bonus now!
          </p>

          {/* WhatsApp CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-white text-[#25D366] font-extrabold py-3 md:py-2.5 px-4 rounded-lg hover:bg-white/95 transition-colors shadow-lg text-sm md:text-xs text-center"
            aria-label="Claim 100% bonus on WhatsApp"
          >
            CLICK HERE — WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};
