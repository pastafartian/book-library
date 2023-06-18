import React from 'react';
import {
      Button,
      NumberInput,
      TextInput,
      Space } from '@mantine/core';
import { useForm } from '@mantine/form';
// eslint-disable-next-line import/extensions, import/no-unresolved, import/no-absolute-path
import { bookStore } from '/src/store/store.js';

export function FormField() {
  //create variable from store
  const addBook = bookStore(
    (state) => state.addBook,
  );
  //initializes form data
  const form = useForm({
    initialValues: {
      title: '',
      authorFirstName: '',
      authorLastName: '',
      publicationYear: '',
      pages: '',
    },
  });

  return (
  <form onSubmit={form.onSubmit((values) => addBook(values))}>
    <TextInput
      placeholder="Book Title"
      label="Title"
      withAsterisk
      {...form.getInputProps('title')}
    />
    <TextInput
      placeholder="First Name"
      label="Author First Name"
      withAsterisk
      {...form.getInputProps('firstName')}
    /><TextInput
      placeholder="Last Name"
      label="Author Last Name"
      withAsterisk
      {...form.getInputProps('lastName')}
    />
    <NumberInput
      placeholder="Year"
      label="Publication Year"
      withAsterisk
      {...form.getInputProps('publicationYear')}
      defaultValue={2000}
    />
    <NumberInput
      placeholder="Pages"
      label="Number of pages"
      withAsterisk
      {...form.getInputProps('pages')}
    />
    <Space h="lg" />
    <Button type="submit">
      Submit
    </Button>
  </form>
  );
}
