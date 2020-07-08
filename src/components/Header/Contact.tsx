import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Mail from '../../assets/images/mail.svg';

const { colors } = require('../../../tailwind');

const Button = styled.button`
  ${tw`m-auto shadow-md pointer`}
  display: block;
  background-color: ${colors.blue};
  text-decoration: unset;
  width: 200px;
  height: 50px;
  line-height: 50px;
  color: ${colors.white};
  border-radius: 5px;

  &:hover img {
    height: 32px;
  }
`;

const Flex = styled.div`
  ${tw`flex flex-row`}
`;

const Span = styled.span`
  ${tw`font-roboto text-center w-full`}
  margin-left: 15px;
  line-height: inherit;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
`;

const Image = styled.img`
  margin-top: 10px;
  margin-right: 15px;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
  height: 30px;
`;

const Contact = (): JSX.Element => {
  const contactWithMail = () =>
    (location.href = 'mailto:moussa@miskounene.com');

  return (
    <Button onClick={contactWithMail}>
      <Flex>
        <Span>Me contacter</Span>
        <Image src={Mail} />
      </Flex>
    </Button>
  );
};

export default Contact;
