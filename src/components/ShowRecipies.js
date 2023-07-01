import React from "react";
import { useGlobalContext } from "../context";
import { Card, Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ShowRecipies = () => {
  const { db, setDb } = useGlobalContext();

  const navigate = useNavigate();
  return (
    <div>
      {db.map((item, index) => {
        const { name, ingredients, instructions, cuisineType, img } = item;

        return (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Cuisine Type: {cuisineType}</Card.Text>
                <Button variant="primary" onClick={() => navigate(`/${name}`)} >See Recipie</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </div>
  );
};

export default ShowRecipies;
