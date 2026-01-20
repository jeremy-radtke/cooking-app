import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SettingsPage } from './components/SettingsPage';
import { GeneralSettingsPage } from './components/GeneralSettingsPage';
import { PreferencesPage } from './components/PreferencesPage';
import { AccessibilityPage } from './components/AccessibilityPage';
import { LanguagePage } from './components/LanguagePage';
import { MainMenuPage } from './components/MainMenuPage';
import { RecipesPage } from './components/RecipesPage';
import { RecipeServingsPage } from './components/RecipeServingsPage';
import { RecipeDetailsPage } from './components/RecipeDetailsPage';
import { RecipeStepPage } from './components/RecipeStepPage';
import { ShoppingListPage } from './components/ShoppingListPage';
import { StoragePage } from './components/StoragePage';

export type Page = 'home' | 'settings' | 'generalSettings' | 'preferences' | 'accessibility' | 'language' | 'mainMenu' | 'recipes' | 'recipeServings' | 'recipeDetails' | 'recipeStep' | 'shoppingList' | 'storage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [servings, setServings] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'settings':
        return <SettingsPage onNavigate={setCurrentPage} />;
      case 'generalSettings':
        return <GeneralSettingsPage onNavigate={setCurrentPage} />;
      case 'preferences':
        return <PreferencesPage onNavigate={setCurrentPage} />;
      case 'accessibility':
        return <AccessibilityPage onNavigate={setCurrentPage} />;
      case 'language':
        return <LanguagePage onNavigate={setCurrentPage} />;
      case 'mainMenu':
        return <MainMenuPage onNavigate={setCurrentPage} />;
      case 'recipes':
        return <RecipesPage onNavigate={setCurrentPage} />;
      case 'recipeServings':
        return <RecipeServingsPage onNavigate={setCurrentPage} setServings={setServings} />;
      case 'recipeDetails':
        return <RecipeDetailsPage onNavigate={setCurrentPage} servings={servings} />;
      case 'recipeStep':
        return <RecipeStepPage onNavigate={setCurrentPage} />;
      case 'shoppingList':
        return <ShoppingListPage onNavigate={setCurrentPage} />;
      case 'storage':
        return <StoragePage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white max-w-[393px] mx-auto">
      {renderPage()}
    </div>
  );
}