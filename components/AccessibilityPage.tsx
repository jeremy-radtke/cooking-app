import { useState } from 'react';
import { ArrowLeft, Link } from 'lucide-react';
import type { Page } from '../App';

interface AccessibilityPageProps {
  onNavigate: (page: Page) => void;
}

export function AccessibilityPage({ onNavigate }: AccessibilityPageProps) {
  const [cookingSpeed, setCookingSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [multitasking, setMultitasking] = useState(false);
  const [contrast, setContrast] = useState<'normal' | 'high' | 'veryHigh'>('normal');

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
        <h1 className="text-3xl ml-4 text-gray-800">Barrierefreiheit</h1>
      </div>

      {/* Einstellungen Container */}
      <div className="space-y-4">
        
        {/* Koch-Geschwindigkeit */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg text-gray-700 mb-4">Koch-Geschwindigkeit</h3>
          <div className="space-y-2">
            <button
              onClick={() => setCookingSpeed('slow')}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                cookingSpeed === 'slow'
                  ? 'bg-[#639A00] text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              Langsam - Mehr Zeit für jeden Schritt
            </button>
            <button
              onClick={() => setCookingSpeed('normal')}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                cookingSpeed === 'normal'
                  ? 'bg-[#639A00] text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              Normal - Standard-Geschwindigkeit
            </button>
            <button
              onClick={() => setCookingSpeed('fast')}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                cookingSpeed === 'fast'
                  ? 'bg-[#639A00] text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              Schnell - Für erfahrene Köche
            </button>
          </div>
        </div>

        {/* Multitasking Toggle */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-gray-800">Multitasking</h3>
              <p className="text-sm text-gray-500 mt-1">Mehrere Schritte gleichzeitig anzeigen</p>
            </div>
            <button
              onClick={() => setMultitasking(!multitasking)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                multitasking ? 'bg-[#639A00]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  multitasking ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Piktogramme Toggle */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg text-gray-800">Piktogramme</h3>
              <p className="text-sm text-gray-500 mt-1">Unterstützung durch bildliche Visualisierung der Arbeitsschritte</p>
            </div>
            <button
              className="relative w-14 h-8 rounded-full transition-colors bg-[#639A00] ml-3"
            >
              <span className="absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform right-1" />
            </button>
          </div>
        </div>

        {/* Kontrast Einstellungen */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg text-gray-700 mb-4">Kontrast</h3>
          <p className="text-sm text-gray-500 mb-3">Für Sehbeeinträchtigte Menschen</p>
          <div className="space-y-2">
            <button
              onClick={() => setContrast('normal')}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                contrast === 'normal'
                  ? 'bg-[#639A00] text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              Normal
            </button>
            <button
              onClick={() => setContrast('high')}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                contrast === 'high'
                  ? 'bg-[#639A00] text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              Hoher Kontrast
            </button>
            <button
              onClick={() => setContrast('veryHigh')}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                contrast === 'veryHigh'
                  ? 'bg-[#639A00] text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
              }`}
            >
              Sehr hoher Kontrast
            </button>
          </div>
        </div>

        {/* Assistive Technologien */}
        <button className="w-full bg-white hover:bg-gray-50 p-5 rounded-xl shadow flex items-center gap-4 transition-all">
          <div className="bg-[#639A00] bg-opacity-10 p-3 rounded-lg">
            <Link className="w-6 h-6 text-[#639A00]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg text-gray-800">Assistive Technologien verknüpfen</h3>
            <p className="text-sm text-gray-500 mt-1">Screenreader, Sprachsteuerung & mehr</p>
          </div>
        </button>

      </div>
    </div>
  );
}