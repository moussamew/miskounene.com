import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';
import Link from '../../atomic/Link';
import { headerLinks } from '../../data/links';
import Wrapper from '../../atomic/Wrapper';
import { H2 } from '../../atomic/Heading';
import Logo from '../../assets/images/logo.svg';
import Contact from './Contact';

const Container = styled.header`
  ${tw`flex justify-between`};
  margin-top: 30px;
`;

const Image = styled.img`
  ${tw`h-5`}
`;

const ImageStyle = css`
  ${tw`my-auto`}
`;

const NavLinks = styled.div`
  ${tw`flex relative`}
`;

const Header = (): JSX.Element => (
  <Wrapper>
    <Container>
      <Link page="/" content={<Image src={Logo} />} customstyle={ImageStyle} />
      <NavLinks>
        {headerLinks.map((link) => (
          <H2 key={link.id}>
            <Link page={link.page} content={link.title} />
          </H2>
        ))}
        <Contact />
      </NavLinks>
    </Container>
  </Wrapper>
);

export default Header;
