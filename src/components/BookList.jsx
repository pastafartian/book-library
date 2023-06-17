import React from 'react';
import { Table } from '@mantine/core';
// eslint-disable-next-line import/extensions, import/no-unresolved, import/no-absolute-path
import bookStore from '/src/store/store.js';

export default function BookList() {
  const books = bookStore((state) => state.books);
  const rows = books.map((book) => (
    <tr key={book.title}>
      <td>{book.title}</td>
      <td>{book.author.first}</td>
      <td>{book.author.last}</td>
      <td>{book.publicationYear}</td>
      <td>{book.pages}</td>
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
