import { ArrowLeft, Settings, Sliders, Eye } from 'lucide-react';
import type { Page } from '../App';

interface SettingsPageProps {
  onNavigate: (page: Page) => void;
}

export function SettingsPage({ onNavigate }: SettingsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-3xl ml-4 text-gray-800">Einstellungen</h1>
      </div>

      {/* Einstellungen Container */}
      <div className="space-y-4">
        
        {/* Allgemein Button */}
        <button
          onClick={() => onNavigate('generalSettings')}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-xl shadow flex items-center gap-4 transition-all"
        >
          <div className="bg-[#639A00] bg-opacity-10 p-3 rounded-lg">
            <Settings className="w-6 h-6 text-[#639A00]" />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-lg text-gray-800">Allgemein</h2>
            <p className="text-sm text-gray-500">Lautstärke, Helligkeit, Benachrichtigungen</p>
          </div>
        </button>

        {/* Präferenzen Button */}
        <button
          onClick={() => onNavigate('preferences')}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-xl shadow flex items-center gap-4 transition-all"
        >
          <div className="bg-[#639A00] bg-opacity-10 p-3 rounded-lg">
            <Sliders className="w-6 h-6 text-[#639A00]" />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-lg text-gray-800">Präferenzen</h2>
            <p className="text-sm text-gray-500">Ernährung und Vorlieben</p>
          </div>
        </button>

        {/* Barrierefreiheit Button */}
        <button
          onClick={() => onNavigate('accessibility')}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-xl shadow flex items-center gap-4 transition-all"
        >
          <div className="bg-[#639A00] bg-opacity-10 p-3 rounded-lg">
            <Eye className="w-6 h-6 text-[#639A00]" />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-lg text-gray-800">Barrierefreiheit</h2>
            <p className="text-sm text-gray-500">Kontrast, Geschwindigkeit, Assistenz</p>
          </div>
        </button>
      </div>
    </div>
  );
}
