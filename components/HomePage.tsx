import { useState } from "react";
import { Settings, Globe, Play } from "lucide-react";
import type { Page } from "../App";
import logo from "figma:asset/1cf62fe1448892e23d1f73025aaab2a0e965a563.png";
import logoGif from "figma:asset/13c95ecf3e598c7bfa68d99a571c274a238ed87f.png";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [showGif, setShowGif] = useState(false);

  const handleLogoClick = () => {
    setShowGif(true);
    // GIF für 3 Sekunden anzeigen, dann zurück zum Logo
    setTimeout(() => {
      setShowGif(false);
    }, 7000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-green-50 to-white">
      {/* Logo Platzhalter */}
      <div className="mb-12 flex flex-col items-center">
        <button
          onClick={handleLogoClick}
          className="mb-4 transition-transform hover:scale-105"
        >
          <img
            src={showGif ? logoGif : logo}
            alt="Inclu-cook Logo"
            className="w-64 h-auto"
          />
        </button>
      </div>

      {/* Zentrale Buttons */}
      <div className="w-full space-y-4">
        {/* Hauptbutton - Start */}
        <button
          onClick={() => onNavigate("mainMenu")}
          className="w-full bg-[#639A00] hover:bg-[#527F00] text-white py-5 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105"
        >
          <Play className="w-7 h-7" />
          <span className="text-xl">Start</span>
        </button>

        {/* Kleinere Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate("settings")}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-all"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm">Einstellungen</span>
          </button>

          <button
            onClick={() => onNavigate("language")}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-all"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm">Sprache</span>
          </button>
        </div>
      </div>
    </div>
  );
}