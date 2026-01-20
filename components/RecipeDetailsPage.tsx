import { ArrowLeft, ShoppingCart, Play } from 'lucide-react';
import type { Page } from '../App';

interface RecipeDetailsPageProps {
  onNavigate: (page: Page) => void;
  servings: number;
}

export function RecipeDetailsPage({ onNavigate, servings }: RecipeDetailsPageProps) {
  // Basis-Zutaten für 1 Person
  const baseIngredients = [
    { name: 'Spaghetti', amount: 100, unit: 'g' },
    { name: 'Tomaten', amount: 2, unit: 'Stück' },
    { name: 'Knoblauch', amount: 1, unit: 'Zehe' },
    { name: 'Olivenöl', amount: 2, unit: 'EL' },
    { name: 'Salz', amount: 0.5, unit: 'TL' },
    { name: 'Pfeffer', amount: 0.5, unit: 'TL' },
    { name: 'Basilikum', amount: 3, unit: 'Blätter' },
    { name: 'Parmesan', amount: 20, unit: 'g' },
  ];

  // Zutaten an Portionszahl anpassen
  const ingredients = baseIngredients.map(item => ({
    ...item,
    amount: item.amount * servings
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-6">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate('recipeServings')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl ml-4 text-gray-800">Spaghetti mit Tomatensauce</h1>
        </div>
      </div>

      {/* Rezeptbild */}
      <div className="px-6 mt-6">
        <img
          src="https://images.unsplash.com/photo-1751151497799-8b4057a2638e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjB0b21hdG8lMjBzYXVjZSUyMHBhc3RhfGVufDF8fHx8MTc2ODgyODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Spaghetti mit Tomatensauce"
          className="w-full h-48 object-cover rounded-xl shadow"
        />
      </div>

      {/* Info */}
      <div className="px-6 mt-4">
        <div className="bg-[#639A00] bg-opacity-10 p-4 rounded-xl">
          <p className="text-gray-700">
            <span className="font-semibold">Portionen:</span> {servings} {servings === 1 ? 'Person' : 'Personen'}
          </p>
          <p className="text-gray-700 mt-1">
            <span className="font-semibold">Zubereitungszeit:</span> 25 Minuten
          </p>
        </div>
      </div>

      {/* Zutaten */}
      <div className="px-6 mt-6">
        <h2 className="text-2xl text-gray-800 mb-4">Zutaten</h2>
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="text-gray-800">{ingredient.name}</span>
              <span className="text-gray-600 font-medium">
                {ingredient.amount % 1 === 0 ? ingredient.amount : ingredient.amount.toFixed(1)} {ingredient.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 mt-6 space-y-3">
        <button className="w-full bg-white hover:bg-gray-50 border-2 border-[#639A00] text-[#639A00] py-4 px-6 rounded-xl shadow flex items-center justify-center gap-3 transition-all">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-lg">Auf die Einkaufsliste</span>
        </button>

        <button
          onClick={() => onNavigate('recipeStep')}
          className="w-full bg-[#639A00] hover:bg-[#527F00] text-white py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105"
        >
          <Play className="w-5 h-5" />
          <span className="text-lg">Rezept starten</span>
        </button>
      </div>
    </div>
  );
}
