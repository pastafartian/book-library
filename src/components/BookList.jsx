import React from 'react';
import { Table } from '@mantine/core';
import { Trash } from 'tabler-icons-react';
// eslint-disable-next-line import/extensions, import/no-unresolved, import/no-absolute-path
import { bookStore } from '/src/store/store.js';

export function BookList() {
  //create variables from store
  const [books, removeEntry] = bookStore((state) => [state.books, state.removeEntry]);

  //function to handle row deletion
  const handleDelete = index => {
    removeEntry(books.filter((_, i) => i !== index));
  };
  //map each book in array to a row
  const rows = books.map((book, index) => (
    <tr key={book.title}>
      <td>{book.title}</td>
      <td>{book.author.first}</td>
      <td>{book.author.last}</td>
      <td>{book.publicationYear}</td>
      <td>{book.pages}</td>
      {/*include button to delete each row*/}
      <td>
        <button type="button" onClick={() => handleDelete(index)}>
          <Trash />
        </button>
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author First Name</th>
          <th>Author Last Name</th>
          <th>Year Published</th>
          <th># of Pages</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
