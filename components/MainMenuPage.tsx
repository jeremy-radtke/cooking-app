import { ArrowLeft, ChefHat, ShoppingCart, Package } from 'lucide-react';
import type { Page } from '../App';

interface MainMenuPageProps {
  onNavigate: (page: Page) => void;
}

export function MainMenuPage({ onNavigate }: MainMenuPageProps) {
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
        <h1 className="text-3xl ml-4 text-gray-800">Inclu-cook</h1>
      </div>

      {/* Hauptmenü Buttons */}
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('recipes')}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-all transform hover:scale-105"
        >
          <div className="bg-[#639A00] bg-opacity-10 p-4 rounded-xl">
            <ChefHat className="w-8 h-8 text-[#639A00]" />
          </div>
          <div className="text-left">
            <h2 className="text-xl text-gray-800">Rezepte</h2>
            <p className="text-sm text-gray-600">Entdecken Sie leckere Gerichte</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('shoppingList')}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-all transform hover:scale-105"
        >
          <div className="bg-green-100 p-4 rounded-xl">
            <ShoppingCart className="w-8 h-8 text-green-600" />
          </div>
          <div className="text-left">
            <h2 className="text-xl text-gray-800">Einkaufsliste</h2>
            <p className="text-sm text-gray-600">Verwalten Sie Ihre Einkäufe</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('storage')}
          className="w-full bg-white hover:bg-gray-50 p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-all transform hover:scale-105"
        >
          <div className="bg-blue-100 p-4 rounded-xl">
            <Package className="w-8 h-8 text-blue-600" />
          </div>
          <div className="text-left">
            <h2 className="text-xl text-gray-800">Lager</h2>
            <p className="text-sm text-gray-600">Ihre Vorräte im Überblick</p>
          </div>
        </button>
      </div>
    </div>
  );
}