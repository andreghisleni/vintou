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
          Algo que você se sinta confortável, não sendo pelado já ta valendo.
          Pode ser até de pijama.
        </Card>
        <Card title="Local: Winter Park Chapecó">
          São Roque Interior - Interior, Chapecó - SC, 89815-899
        </Card>
        <Card
          title="Localização"
          go="https://www.google.com/maps/place/Winter+Park+Chapec%C3%B3/@-27.1071954,-52.5456392,80m/data=!3m1!1e3!4m6!3m5!1s0x94e4b1920279bc75:0x197b5176bea827f6!8m2!3d-27.1072092!4d-52.5455194!16s%2Fg%2F11tf8lt3x6"
        >
          Abrir no google maps
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Home;
