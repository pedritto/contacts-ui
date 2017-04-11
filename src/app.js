import React from 'react';

import CardHolder from './components/holder/CardHolder';
import ContactForm from './components/form/ContactForm';

const App = () => (
  <div>
    <h1>Contacts</h1>
    <CardHolder width={2} />
    <ContactForm />
  </div>
);

export default App;
