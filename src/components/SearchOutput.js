import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Table } from 'react-bootstrap'; 

export default function SearchOutput({ data }) {
  const { value, setValue } = useGlobalContext();

  return (
    <Table striped bordered hover>
      <tbody>
        {data.map((item, index) => {
          const { name, cuisineType, ingredients } = item;
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{cuisineType}</td>
              <td>{ingredients}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}