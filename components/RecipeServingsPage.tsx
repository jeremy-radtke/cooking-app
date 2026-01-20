import { useState } from 'react';
import { ArrowLeft, User, Users } from 'lucide-react';
import type { Page } from '../App';

interface RecipeServingsPageProps {
  onNavigate: (page: Page) => void;
  setServings: (servings: number) => void;
}

export function RecipeServingsPage({ onNavigate, setServings }: RecipeServingsPageProps) {
  const [showInput, setShowInput] = useState(false);
  const [peopleCount, setPeopleCount] = useState(2);

  const handleSinglePerson = () => {
    setServings(1);
    onNavigate('recipeDetails');
  };

  const handleMultiplePeople = () => {
    setServings(peopleCount);
    onNavigate('recipeDetails');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => onNavigate('recipes')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-3xl ml-4 text-gray-800">Portionen</h1>
      </div>

      {/* Info */}
      <div className="mb-8">
        <h2 className="text-xl text-gray-700 mb-2">Spaghetti mit Tomatensauce</h2>
        <p className="text-gray-600">Für wie viele Personen möchten Sie kochen?</p>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        {/* Einzelperson Button */}
        <button
          onClick={handleSinglePerson}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all transform hover:scale-105"
        >
          <div className="bg-[#639A00] bg-opacity-10 p-4 rounded-full">
            <User className="w-10 h-10 text-[#639A00]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg text-gray-800">Ich koche nur für mich</h3>
            <p className="text-sm text-gray-500">1 Portion</p>
          </div>
        </button>

        {/* Mehrere Personen Button */}
        <button
          onClick={() => setShowInput(!showInput)}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all transform hover:scale-105"
        >
          <div className="bg-green-100 p-4 rounded-full">
            <Users className="w-10 h-10 text-green-600" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg text-gray-800">Ich koche für mehrere Personen</h3>
            <p className="text-sm text-gray-500">Portionen anpassen</p>
          </div>
        </button>

        {/* Eingabefeld für Personenanzahl */}
        {showInput && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <label className="block mb-4">
              <span className="text-lg text-gray-700">Anzahl der Personen:</span>
              <input
                type="number"
                min="2"
                max="20"
                value={peopleCount}
                onChange={(e) => setPeopleCount(Number(e.target.value))}
                className="mt-2 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#639A00] focus:border-transparent text-lg"
              />
            </label>
            <button
              onClick={handleMultiplePeople}
              className="w-full bg-[#639A00] hover:bg-[#527F00] text-white py-3 px-4 rounded-lg shadow transition-all"
            >
              Weiter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
