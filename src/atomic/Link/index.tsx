import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { SimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';

interface IProps {
  page: string;
  content: ReactNode;
  customstyle?: SimpleInterpolation;
}

const StyledLink = styled((props) => <GatsbyLink {...props} />)`
  ${tw`font-roboto text-blackDark pr-2`};
  text-decoration: none;
  ${(props) => props.customstyle};
`;

const Link = ({ page, content, customstyle }: IProps): JSX.Element => (
  <StyledLink to={page} customstyle={customstyle}>
    {content}
  </StyledLink>
);

export default Link;
