import React from 'react';
import {
  Container,
  Space } from '@mantine/core';
import { BookList } from './components/BookList';
import { FormField } from './components/FormField';

export default function App() {
  return (
    <Container>
      <BookList />
      <Space h="md" />
      <div>
        <FormField />
      </div>
    </Container>
  );
}
