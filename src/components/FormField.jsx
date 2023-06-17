import React from 'react';
import {
      Button,
      NumberInput,
      TextInput } from '@mantine/core';
// eslint-disable-next-line import/extensions, import/no-unresolved, import/no-absolute-path
import useStore from '/src/store/store.js';

export default function BookList() {
  const [input, addBook, changeInput] = useStore(
    (state) => [state.addBook, state.input, state.changeInput],
  );
  //const input = useStore((state) => state.addBook);
  //const rows = books.map((book) => (
  //  <tr key={book.title}>
  //    <td>{book.title}</td>
  //    <td>{book.author.first}</td>
  //    <td>{book.author.last}</td>
  //    <td>{book.publicationYear}</td>
  //    <td>{book.pages}</td>
  //  </tr>
  //));

  return (
  <div>
    <TextInput
      placeholder="Book Title"
      label="Title"
      withAsterisk
    />
    <TextInput
      placeholder="First Name"
      label="Author First Name"
      withAsterisk
    /><TextInput
      placeholder="Last Name"
      label="Author Last Name"
      withAsterisk
    />
    <NumberInput
      defaultValue={input.publicationYearInput}
      placeholder="Year"
      label="Publication Year"
      withAsterisk
    />
    <NumberInput
      defaultValue={input.pagesInput}
      placeholder="Pages"
      label="Number of pages"
      onChange={changeInput}
    />
    <Button onClick={addBook}>
      Submit
    </Button>
  </div>
  );
}
