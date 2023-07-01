import React, { useState } from 'react';
import SearchOutput from './SearchOutput';
import { useGlobalContext } from '../context';
import { Form, Button } from 'react-bootstrap';


const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const {db, setDb} = useGlobalContext();

    const filteredUsers = (data) => {
        return data.filter(
            ({name, cuisineType}) => {
              if(category.toLowerCase === name.toLowerCase ){
                return name.toLowerCase().includes(query)}
              if(category.toLowerCase === cuisineType.toLowerCase ){
                  return cuisineType.toLowerCase().includes(query)}
            }
        )
    }

    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="search">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Form.Group className='d-flex gap-4'>
                <span>Filters:</span>
                <Form.Check type="radio" name='radio' label="Name" value='name' defaultChecked onChange={(e) => setCategory(e.target.value)} />
                <Form.Check type="radio" name='radio' label="Cuisine" value='cuisineType' onChange={(e) => setCategory(e.target.value)} />
                <Form.Check type="radio" name='radio' label="Ingredients" value='ingredients' onChange={(e) => setCategory(e.target.value)} />
            </Form.Group>
          </Form.Group>
        </Form>
        {query && <SearchOutput data={filteredUsers(db)} />}
      </div>
    );
}

export default SearchBar;