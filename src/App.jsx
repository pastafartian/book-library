import React from 'react';
import BookList from './components/BookList';
import FormField from './components/FormField';

export default function App() {
  return (
    <div>
      <BookList />
      <div>
        <FormField />
      </div>
    </div>
  );
}
