import React from 'react';
import { Table } from '@mantine/core';
import { Trash } from 'tabler-icons-react';
// eslint-disable-next-line import/extensions, import/no-unresolved, import/no-absolute-path
import bookStore from '/src/store/store.js';

export default function BookList() {
  const [books, removeEntry] = bookStore((state) => [state.books, state.removeEntry]);

  const handleDelete = index => {
    removeEntry(books.filter((_, i) => i !== index));
  };
  const rows = books.map((book, index) => (
    <tr key={book.title}>
      <td>{book.title}</td>
      <td>{book.author.first}</td>
      <td>{book.author.last}</td>
      <td>{book.publicationYear}</td>
      <td>{book.pages}</td>
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
