import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import {Container, Card, Button} from 'react-bootstrap';

const SingleRecipie = () => {
    const { db, setDb } = useGlobalContext();

    const { rname } = useParams();

    const recipie = db.find((item) => item.name === rname)
    const {name, img, ingredients, instructions, cuisineType} = recipie;

    return (
    <div>
        <Container className='mt-4'>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Cuisine Type: {cuisineType}</Card.Text>
                <Card.Text>Ingredients: {ingredients}</Card.Text>
                <Card.Text>Instructions: {instructions}</Card.Text>
                <Button variant="primary" onClick={() => Navigate} >See Recipie</Button>
              </Card.Body>
            </Card>
          </Container>
    </div>
  )
}

export default SingleRecipie;