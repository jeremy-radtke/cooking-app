import { useState } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import type { Page } from '../App';

interface PreferencesPageProps {
  onNavigate: (page: Page) => void;
}

interface Preference {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

export function PreferencesPage({ onNavigate }: PreferencesPageProps) {
  const [preferences, setPreferences] = useState<Preference[]>([
    {
      id: 'vegan',
      label: 'Vegan',
      description: 'Keine tierischen Produkte (kein Fleisch, Fisch, Milch, Eier, Honig)',
      enabled: false,
    },
    {
      id: 'vegetarian',
      label: 'Vegetarisch',
      description: 'Kein Fleisch und kein Fisch, aber tierische Produkte wie Milch und Eier sind erlaubt',
      enabled: false,
    },
    {
      id: 'pescetarian',
      label: 'Pescetarisch',
      description: 'Kein Fleisch, aber Fisch und Meeresfrüchte sind erlaubt',
      enabled: false,
    },
    {
      id: 'glutenfree',
      label: 'Glutenfrei',
      description: 'Keine Produkte mit Gluten (Weizen, Roggen, Gerste, Dinkel)',
      enabled: false,
    },
    {
      id: 'lactosefree',
      label: 'Laktosefrei',
      description: 'Keine Milchprodukte oder laktosefreie Alternativen',
      enabled: false,
    },
    {
      id: 'organic',
      label: 'Bio-Produkte',
      description: 'Bevorzugung von biologisch angebauten und produzierten Lebensmitteln',
      enabled: false,
    },
  ]);

  const [showInfo, setShowInfo] = useState<string | null>(null);

  const togglePreference = (id: string) => {
    setPreferences(preferences.map(pref => 
      pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
    ));
  };

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
        <h1 className="text-3xl ml-4 text-gray-800">Präferenzen</h1>
      </div>

      {/* Präferenzen Liste */}
      <div className="space-y-3">
        {preferences.map((preference) => (
          <div key={preference.id} className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg text-gray-800">{preference.label}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowInfo(showInfo === preference.id ? null : preference.id)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <HelpCircle className="w-5 h-5 text-gray-500" />
                </button>
                <button
                  onClick={() => togglePreference(preference.id)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    preference.enabled ? 'bg-[#639A00]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                      preference.enabled ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            {showInfo === preference.id && (
              <div className="mt-2 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-700">{preference.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-[#639A00] bg-opacity-10 p-4 rounded-xl border border-[#639A00] border-opacity-20">
        <p className="text-sm text-gray-700">
          💡 Ihre Präferenzen helfen uns, passende Rezepte für Sie zu finden und Ihre Einkaufsliste anzupassen.
        </p>
      </div>
    </div>
  );
}
