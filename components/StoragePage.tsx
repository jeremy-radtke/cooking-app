import { ArrowLeft, Package } from 'lucide-react';
import type { Page } from '../App';

interface StoragePageProps {
  onNavigate: (page: Page) => void;
}

const storageItems = [
  {
    id: 1,
    name: 'Tomaten',
    quantity: '1kg',
    expiry: '5 Tage',
    image: 'https://images.unsplash.com/photo-1621332606136-7e66f02dade1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY4NjYxNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'fresh',
  },
  {
    id: 2,
    name: 'Mozzarella',
    quantity: '200g',
    expiry: '3 Tage',
    image: 'https://images.unsplash.com/photo-1635714293982-65445548ac42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBkYWlyeXxlbnwxfHx8fDE3Njg2NDY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'warning',
  },
  {
    id: 3,
    name: 'Mehl',
    quantity: '2kg',
    expiry: '6 Monate',
    image: 'https://images.unsplash.com/photo-1652161468447-d8abb529b464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG91ciUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2ODY2MTU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'fresh',
  },
  {
    id: 4,
    name: 'Eier',
    quantity: '6 Stück',
    expiry: '10 Tage',
    image: 'https://images.unsplash.com/photo-1649935979972-3fd154eec948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwa2l0Y2hlbnxlbnwxfHx8fDE3Njg2NjE1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'fresh',
  },
  {
    id: 5,
    name: 'Spaghetti',
    quantity: '1.5kg',
    expiry: '1 Jahr',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY4NTM4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'fresh',
  },
  {
    id: 6,
    name: 'Brot',
    quantity: '1 Laib',
    expiry: '2 Tage',
    image: 'https://images.unsplash.com/photo-1674770067314-296af21ad811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2VyeXxlbnwxfHx8fDE3Njg2NDAwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'warning',
  },
];

export function StoragePage({ onNavigate }: StoragePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-6">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate('mainMenu')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl ml-4 text-gray-800">Lager</h1>
        </div>
      </div>

      {/* Liste */}
      <div className="px-6 mt-6 space-y-2">
        {storageItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white p-4 rounded-xl shadow flex items-center gap-4 ${
              item.status === 'warning' ? 'border-2 border-yellow-300' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.quantity}</p>
              <p className={`text-xs ${item.status === 'warning' ? 'text-yellow-600' : 'text-gray-400'}`}>
                Haltbar: {item.expiry}
              </p>
            </div>
            <div className="text-right">
              {item.status === 'warning' && (
                <span className="text-yellow-600 text-sm">⚠️</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="mx-6 mt-6 bg-[#639A00] bg-opacity-10 p-4 rounded-xl border border-[#639A00] border-opacity-20">
        <div className="flex items-start gap-3">
          <Package className="w-5 h-5 text-[#639A00] mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800">Tipp</h3>
            <p className="text-sm text-gray-700">
              Artikel mit ⚠️ sollten bald verbraucht werden.
            </p>
          </div>
        </div>
      </div>

      {/* Hinzufügen Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-[#639A00] hover:bg-[#527F00] text-white p-4 rounded-full shadow-lg transition-all">
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}