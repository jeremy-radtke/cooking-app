import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import type { Page } from '../App';

interface RecipesPageProps {
  onNavigate: (page: Page) => void;
}

const recipes = [
  {
    id: 1,
    name: 'Spaghetti mit Tomatensauce',
    image: 'https://images.unsplash.com/photo-1751151497799-8b4057a2638e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjB0b21hdG8lMjBzYXVjZSUyMHBhc3RhfGVufDF8fHx8MTc2ODgyODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '25 Min',
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY4NTM4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '20 Min',
  },
  {
    id: 3,
    name: 'Pizza Margherita',
    image: 'https://images.unsplash.com/photo-1681567604770-0dc826c870ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2R8ZW58MXx8fHwxNzY4NjEwMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '45 Min',
  },
  {
    id: 4,
    name: 'Bunter Salat',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzY4NTkzNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '15 Min',
  },
  {
    id: 5,
    name: 'Kürbissuppe',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VwJTIwYm93bHxlbnwxfHx8fDE3Njg1OTk3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '30 Min',
  },
  {
    id: 6,
    name: 'Cheeseburger Deluxe',
    image: 'https://images.unsplash.com/photo-1607013401178-f9c15ab575bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBtZWFsfGVufDF8fHx8MTc2ODU2NjA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '25 Min',
  },
  {
    id: 7,
    name: 'Sushi Platte',
    image: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2ODYzMTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '60 Min',
  },
  {
    id: 8,
    name: 'Schokoladenkuchen',
    image: 'https://images.unsplash.com/photo-1679942262057-d5732f732841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3Njg1ODE2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '50 Min',
  },
  {
    id: 9,
    name: 'Frisches Brot',
    image: 'https://images.unsplash.com/photo-1674770067314-296af21ad811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2VyeXxlbnwxfHx8fDE3Njg2NDAwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '90 Min',
  },
];

export function RecipesPage({ onNavigate }: RecipesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-6">
      {/* Header */}
      <div className="sticky top-0 bg-white shadow-sm z-10 p-6 pb-4">
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate('mainMenu')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl ml-4 text-gray-800">Rezepte</h1>
        </div>

        {/* Suchfeld */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rezept suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#639A00] focus:border-transparent"
          />
        </div>
      </div>

      {/* Rezepte Liste */}
      <div className="px-6 mt-4 space-y-3">
        {filteredRecipes.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => recipe.id === 1 ? onNavigate('recipeServings') : null}
            className="w-full bg-white hover:bg-gray-50 p-4 rounded-xl shadow flex items-center gap-4 transition-all"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1 text-left">
              <h3 className="text-lg text-gray-800">{recipe.name}</h3>
              <p className="text-sm text-gray-500">{recipe.time}</p>
            </div>
          </button>
        ))}

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Keine Rezepte gefunden</p>
          </div>
        )}
      </div>
    </div>
  );
}