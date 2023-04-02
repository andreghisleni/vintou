import React from 'react';

import Image from 'next/image';
import { Container } from './styles';

import UPCornerImg from '../../assets/up-corner.svg';
import DownCornerImg from '../../assets/down-corner.svg';

interface IBaseContainerProps {
  children: React.ReactNode;
}

export const BaseContainer: React.FC<IBaseContainerProps> = ({ children }) => {
  return (
    <Container>
      <div>
        <Image src={UPCornerImg} alt="" className="up-corner" />
        {children}
        <Image src={DownCornerImg} alt="" className="down-corner" />
      </div>
    </Container>
  );
};
