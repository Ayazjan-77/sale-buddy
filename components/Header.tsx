
import React from 'react';
import { PlusIcon, UserGroupIcon } from './icons';

interface HeaderProps {
  onAddContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddContact }) => {
  return (
    <header className="bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
             <UserGroupIcon className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              SalesBuddy
            </h1>
          </div>
          <button
            onClick={onAddContact}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            <PlusIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Add Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
