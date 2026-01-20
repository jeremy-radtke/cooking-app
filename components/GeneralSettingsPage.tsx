import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Page } from '../App';

interface GeneralSettingsPageProps {
  onNavigate: (page: Page) => void;
}

export function GeneralSettingsPage({ onNavigate }: GeneralSettingsPageProps) {
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(50);
  const [textSize, setTextSize] = useState(16);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('settings')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-3xl ml-4 text-gray-800">Allgemein</h1>
      </div>

      {/* Einstellungen Container */}
      <div className="space-y-4">
        
        {/* Lautstärke */}
        <div className="bg-white p-5 rounded-xl shadow">
          <label className="block mb-3">
            <span className="text-lg text-gray-700">Lautstärke</span>
            <span className="float-right text-[#639A00] font-semibold">{volume}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#639A00]"
          />
        </div>

        {/* Helligkeit */}
        <div className="bg-white p-5 rounded-xl shadow">
          <label className="block mb-3">
            <span className="text-lg text-gray-700">Helligkeit</span>
            <span className="float-right text-[#639A00] font-semibold">{brightness}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#639A00]"
          />
        </div>

        {/* Textgröße */}
        <div className="bg-white p-5 rounded-xl shadow">
          <label className="block mb-3">
            <span className="text-lg text-gray-700">Textgröße</span>
            <span className="float-right text-[#639A00] font-semibold">{textSize}px</span>
          </label>
          <input
            type="range"
            min="12"
            max="24"
            value={textSize}
            onChange={(e) => setTextSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#639A00]"
          />
        </div>

        {/* Benachrichtigungen Toggle */}
        <div className="bg-white p-5 rounded-xl shadow flex items-center justify-between">
          <span className="text-lg text-gray-700">Benachrichtigungen</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              notifications ? 'bg-[#639A00]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                notifications ? 'right-1' : 'left-1'
              }`}
            />
          </button>
        </div>

        {/* Zusätzliche Einstellungen */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg text-gray-700 mb-3">Erweiterte Optionen</h3>
          <div className="space-y-2">
            <button className="w-full text-left py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              Cache leeren
            </button>
            <button className="w-full text-left py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              Daten synchronisieren
            </button>
            <button className="w-full text-left py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              Über die App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
