import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import type { Page } from '../App';

interface LanguagePageProps {
  onNavigate: (page: Page) => void;
}

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

export function LanguagePage({ onNavigate }: LanguagePageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('de');
  const [easyLanguage, setEasyLanguage] = useState(false);

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
        <h1 className="text-3xl ml-4 text-gray-800">Sprache auswählen</h1>
      </div>

      <div className="space-y-4">
        {/* Einfache Sprache Toggle */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-gray-800">Einfache Sprache</h3>
              <p className="text-sm text-gray-500 mt-1">Leicht verständliche Texte</p>
            </div>
            <button
              onClick={() => setEasyLanguage(!easyLanguage)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                easyLanguage ? 'bg-[#639A00]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  easyLanguage ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Sprachen Liste */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {languages.map((language, index) => (
            <button
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                index !== languages.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{language.flag}</span>
                <span className="text-lg text-gray-800">{language.name}</span>
              </div>
              {selectedLanguage === language.code && (
                <Check className="w-6 h-6 text-[#639A00]" />
              )}
            </button>
          ))}
        </div>

        {/* Bestätigen Button */}
        <button
          onClick={() => onNavigate('home')}
          className="w-full bg-[#639A00] hover:bg-[#527F00] text-white py-4 px-6 rounded-xl shadow-lg transition-all"
        >
          Bestätigen
        </button>
      </div>
    </div>
  );
}