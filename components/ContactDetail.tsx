
import React from 'react';
import { Contact } from '../types';
import { BackIcon, BuildingOfficeIcon, EnvelopeIcon, PhoneIcon } from './icons';

interface ContactDetailProps {
  contact: Contact;
  onBack: () => void;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ contact, onBack }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 relative animate-fade-in">
       <button 
         onClick={onBack}
         className="md:hidden absolute top-4 left-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
         aria-label="Back to list"
        >
          <BackIcon className="h-6 w-6"/>
        </button>
      <div className="flex flex-col items-center text-center">
        <img
          className="h-24 w-24 rounded-full object-cover mb-4"
          src={`https://i.pravatar.cc/150?u=${contact.id}`}
          alt={contact.name}
        />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{contact.name}</h2>
      </div>
      <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-6">
        <dl className="space-y-4">
          <div className="flex items-start space-x-4">
            <dt className="flex-shrink-0 text-slate-500 dark:text-slate-400"><BuildingOfficeIcon className="h-6 w-6" /></dt>
            <dd className="text-sm text-slate-900 dark:text-white">{contact.company}</dd>
          </div>
          <div className="flex items-start space-x-4">
            <dt className="flex-shrink-0 text-slate-500 dark:text-slate-400"><EnvelopeIcon className="h-6 w-6" /></dt>
            <dd className="text-sm text-slate-900 dark:text-white">
              <a href={`mailto:${contact.email}`} className="text-primary-600 hover:underline dark:text-primary-400">
                {contact.email}
              </a>
            </dd>
          </div>
          <div className="flex items-start space-x-4">
            <dt className="flex-shrink-0 text-slate-500 dark:text-slate-400"><PhoneIcon className="h-6 w-6" /></dt>
            <dd className="text-sm text-slate-900 dark:text-white">
              <a href={`tel:${contact.phone}`} className="text-primary-600 hover:underline dark:text-primary-400">
                {contact.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

// Fix: Add missing default export for the ContactDetail component.
export default ContactDetail;
