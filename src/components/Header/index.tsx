import React from 'react';

// import ApontadorLogo from '../../assets/apontador.png';
// import UdescLogo from '../../assets/udesc.png';
// import AstroLogo from '../../assets/astro.png';

import Image from 'next/image';
import LogoImg from '../../assets/logo.svg';

import { Container, ContainerImages } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <ContainerImages>
          <Image src={LogoImg} alt="Logo" />
          <h1>Festa do André</h1>
        </ContainerImages>
        {/* <ContainerNavigation>
            <ContentMenu>
              <ul>
                <Link href="/">Home</Link>
                <Link href="/t">Teste</Link>
              </ul>
            </ContentMenu>
          </ContainerNavigation> */}
      </div>
    </Container>
  );
};

export default Header;
