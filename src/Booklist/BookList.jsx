import React from 'react';
import { Table } from '@mantine/core';
//import useStore from '../store/store';

export default function BookList() {
  //const rows = elements.map((element) => (
  //  <tr key={element.name}>
  //    <td>{element.position}</td>
  //    <td>{element.name}</td>
  //    <td>{element.symbol}</td>
  //    <td>{element.mass}</td>
  //  </tr>
  //));
  /*function BearCounter() {
    const bears = useStore((state) => state.bears);
    return <h1>{bears} around here...</h1>;
  }*/

  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>Hello</tbody>
    </Table>
  );
}
