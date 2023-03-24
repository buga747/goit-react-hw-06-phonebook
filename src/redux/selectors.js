export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.contacts;

export const getfilteredContacts = state => {
  const filter = state.contacts.filter;
  const allContacts = state.contacts.contacts;
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
