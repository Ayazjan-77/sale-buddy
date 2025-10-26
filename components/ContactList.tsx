
import React from 'react';
import { Contact } from '../types';
import { UserIcon } from './icons';

interface ContactListProps {
  contacts: Contact[];
  selectedContactId: string | null;
  onSelectContact: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, selectedContactId, onSelectContact }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold">Contacts</h2>
      </div>
      <ul className="divide-y divide-slate-200 dark:divide-slate-700 max-h-[calc(100vh-12rem)] overflow-y-auto">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => onSelectContact(contact.id)}
                className={`w-full text-left p-4 flex items-center space-x-4 transition-colors duration-150 ${
                  contact.id === selectedContactId
                    ? 'bg-primary-50 dark:bg-primary-900/50'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
                   <UserIcon className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{contact.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{contact.company}</p>
                </div>
              </button>
            </li>
          ))
        ) : (
          <p className="p-4 text-center text-slate-500 dark:text-slate-400">No contacts found.</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
