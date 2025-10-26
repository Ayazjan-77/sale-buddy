
import React, { useState, useMemo } from 'react';
import { Contact } from './types';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import AddContactForm from './components/AddContactForm';
import Welcome from './components/Welcome';
import { BackIcon } from './components/icons';

const initialContacts: Contact[] = [
  { id: '1', name: 'Jane Doe', company: 'Innovate Inc.', phone: '555-123-4567', email: 'jane.doe@innovate.com' },
  { id: '2', name: 'John Smith', company: 'Tech Solutions', phone: '555-987-6543', email: 'john.smith@techsolutions.io' },
  { id: '3', name: 'Emily White', company: 'Quantum Leap', phone: '555-456-7890', email: 'emily.w@quantumleap.ai' },
];

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const selectedContact = useMemo(() => {
    return contacts.find(c => c.id === selectedContactId) || null;
  }, [contacts, selectedContactId]);

  const handleAddContact = () => {
    setSelectedContactId(null);
    setIsAdding(true);
  };

  const handleSelectContact = (id: string) => {
    setIsAdding(false);
    setSelectedContactId(id);
  };

  const handleSaveContact = (newContactData: Omit<Contact, 'id'>) => {
    const newContact: Contact = {
      id: crypto.randomUUID(),
      ...newContactData,
    };
    const updatedContacts = [...contacts, newContact].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(updatedContacts);
    setIsAdding(false);
    setSelectedContactId(newContact.id);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setSelectedContactId(null);
  };
  
  const handleBack = () => {
    setSelectedContactId(null);
    setIsAdding(false);
  };
  
  const showDetailView = selectedContactId || isAdding;

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <Header onAddContact={handleAddContact} />
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Contact List */}
          <div className={`md:col-span-1 lg:col-span-1 ${showDetailView ? 'hidden md:block' : 'block'}`}>
            <ContactList
              contacts={contacts}
              selectedContactId={selectedContactId}
              onSelectContact={handleSelectContact}
            />
          </div>

          {/* Detail/Form Pane */}
          <div className={`md:col-span-2 lg:col-span-3 ${!showDetailView ? 'hidden md:block' : 'block'}`}>
            {isAdding ? (
              <AddContactForm onSave={handleSaveContact} onCancel={handleCancel} />
            ) : selectedContact ? (
              <ContactDetail contact={selectedContact} onBack={handleBack}/>
            ) : (
              <Welcome onAddContact={handleAddContact} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
