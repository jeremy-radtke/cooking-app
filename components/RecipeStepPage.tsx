import { ArrowLeft } from 'lucide-react';
import type { Page } from '../App';

interface RecipeStepPageProps {
  onNavigate: (page: Page) => void;
}

export function RecipeStepPage({ onNavigate }: RecipeStepPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-6">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate('recipeDetails')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl ml-4 text-gray-800">1. Schritt</h1>
        </div>
      </div>

      {/* Piktogramm */}
      <div className="px-6 mt-8 flex justify-center">
        <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-6xl">🍅</span>
        </div>
      </div>

      {/* Anleitung */}
      <div className="px-6 mt-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl text-gray-800 mb-4">Tomaten schneiden</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Waschen Sie die Tomaten mit Wasser.</p>
            <p>2. Legen Sie die Tomate auf ein Brett.</p>
            <p>3. Nehmen Sie ein Messer.</p>
            <p>4. Schneiden Sie die Tomate in kleine Stücke.</p>
            <p>5. Legen Sie die Stücke in eine Schüssel.</p>
          </div>
        </div>
      </div>

      {/* YouTube Tutorial */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-white text-sm">Video abspielen</p>
            </div>
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg text-gray-800 font-semibold">Tutorial: Tomaten schneiden</h3>
            <p className="text-sm text-gray-500 mt-1">Schritt-für-Schritt Anleitung</p>
          </div>
        </div>
      </div>

      {/* Weiter Button */}
      <div className="px-6 mt-8">
        <button
          className="w-full bg-[#639A00] hover:bg-[#527F00] text-white py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
        >
          <span className="text-lg">Weiter</span>
        </button>
      </div>

      {/* Fortschrittsanzeige */}
      <div className="px-6 mt-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-[#639A00] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">Schritt 1 von 5</p>
      </div>
    </div>
  );
}
