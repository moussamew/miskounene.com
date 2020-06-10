import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const { colors } = require('../../../tailwind');

interface IProps {
  action: () => void;
  content: string;
}

const StyledButton = styled.button`
  ${tw`text-white bg-black h-2
    my-auto font-roboto`}

  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.25rem 2rem;
  padding-bottom: 3rem;
  border: 2px solid ${colors.blackDark};
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #3c3d44;
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${colors.blackDark};
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    background: ${colors.black};
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px ${colors.blackDark};
      transform: translate3d(0, 0.5em, -1em);
    }
  }
`;

const Button = ({ action, content }: IProps): JSX.Element => {
  return <StyledButton onClick={action}>{content}</StyledButton>;
};

export default Button;

/* @import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');

$bg: #fff;
$text: #382b22;
$light-pink: #fff0f0;
$pink: #ffe9e9;
$dark-pink: #f9c4d2;
$pink-border: #b18597;
$pink-shadow: #ffe3e2; */
