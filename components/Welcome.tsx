
import React from 'react';
import { UserGroupIcon, PlusIcon } from './icons';

interface WelcomeProps {
    onAddContact: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onAddContact }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
      <UserGroupIcon className="h-20 w-20 text-slate-300 dark:text-slate-600 mb-4" />
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Welcome to SalesBuddy</h2>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Select a contact from the list to view their details, or add a new one to get started.
      </p>
      <button
        onClick={onAddContact}
        className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
        <PlusIcon className="h-5 w-5" />
        Add New Contact
      </button>
    </div>
  );
};

export default Welcome;
