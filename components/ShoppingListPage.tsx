import { ArrowLeft, Trash2 } from 'lucide-react';
import type { Page } from '../App';

interface ShoppingListPageProps {
  onNavigate: (page: Page) => void;
}

const shoppingItems = [
  {
    id: 1,
    name: 'Tomaten',
    quantity: '500g',
    image: 'https://images.unsplash.com/photo-1621332606136-7e66f02dade1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY4NjYxNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Mozzarella',
    quantity: '250g',
    image: 'https://images.unsplash.com/photo-1635714293982-65445548ac42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBkYWlyeXxlbnwxfHx8fDE3Njg2NDY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Mehl',
    quantity: '1kg',
    image: 'https://images.unsplash.com/photo-1652161468447-d8abb529b464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG91ciUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2ODY2MTU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Eier',
    quantity: '10 Stück',
    image: 'https://images.unsplash.com/photo-1649935979972-3fd154eec948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwa2l0Y2hlbnxlbnwxfHx8fDE3Njg2NjE1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Spaghetti',
    quantity: '500g',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY4NTM4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ShoppingListPage({ onNavigate }: ShoppingListPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-32">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate('mainMenu')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl ml-4 text-gray-800">Einkaufsliste</h1>
        </div>
      </div>

      {/* Liste */}
      <div className="px-6 mt-6 space-y-2">
        {shoppingItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.quantity}</p>
            </div>
            <button className="p-2 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100">
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Ins Lager Button */}
      <div className="fixed bottom-6 left-0 right-0 px-6">
        <button
          onClick={() => onNavigate('storage')}
          className="w-full bg-[#639A00] hover:bg-[#527F00] text-white py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg">Ins Lager</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hinzufügen Button */}
      <div className="fixed bottom-24 right-6">
        <button className="bg-white hover:bg-gray-50 border-2 border-[#639A00] text-[#639A00] w-14 h-14 rounded-full shadow-lg transition-all flex items-center justify-center">
          <span className="text-3xl">+</span>
        </button>
      </div>
    </div>
  );
}
