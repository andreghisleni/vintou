import { Card } from '@/components/Card';
import { CardsContainer, Container } from '@styles/pages/home';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Container className="container">
      <CardsContainer>
        <Card title="Horário: ">
          A festa vai iniciar às 19h, no sábado dia 15 de abril de 2023.
        </Card>
        <Card title="Traje: ">
          Roupa social, ou algo que você se sinta confortável.
        </Card>
        {/* <Card title="Local: ">Rua 123 - Bairro - Cidade - Estado</Card> */}
        <Card title="Localização" go="https://maps.google.com">
          Abrir no google maps
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Home;
