import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';
import Link from '../../atomic/Link';
import { headerLinks } from '../../data/links';
import Wrapper from '../../atomic/Wrapper';
import { H2 } from '../../atomic/Heading';
import Logo from '../../assets/images/logo.svg';
import Button from '../../atomic/Button';

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
  ${tw`flex`}
`;

function Header(): JSX.Element {
  const contactWithMail = () =>
    (location.href = 'mailto:moussa@miskounene.com');

  return (
    <Wrapper>
      <Container>
        <Link
          page="/"
          content={<Image src={Logo} />}
          customstyle={ImageStyle}
        />
        <NavLinks>
          {headerLinks.map((link) => (
            <H2 key={link.id}>
              <Link page={link.page} content={link.title} />
            </H2>
          ))}
          <Button action={contactWithMail} content="Prendre contact" />
        </NavLinks>
      </Container>
    </Wrapper>
  );
}

export default Header;
