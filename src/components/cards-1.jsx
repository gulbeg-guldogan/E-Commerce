import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PromoCards = () => {
  const cards = [
    {
      title: "Unique Life",
      subtitle: "Your Space",
      image: "/assets/IceCream.png",
    },
    {
      title: "Elements Style",
      subtitle: "Ends Today",
      image: "/assets/apple.jpg",
    },
    {
      title: "Elements Style",
      subtitle: "Ends Today",
      image: "/assets/ham.jpg",
    },
  ];

  return (
    <Container className="w-auto h-auto my-5 mt-5">
      <Row className="g-4">
        {cards.map((card, index) => (
          <Col key={index} md={4}>
            <Card className="text-center border-4 bg-white">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                <Card.Title>{card.title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ maxHeight: '150px', objectFit: 'contain', marginBottom: '1rem' }}
                />
                <Button variant="link">Explore Items</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PromoCards;