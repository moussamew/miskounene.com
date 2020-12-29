import { FunctionComponent } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'
import { useTranslation } from 'react-i18next'
import { Title, Text } from '../../components'

const Section = styled.section`
  ${tw`lg:mt-8 mt-5 
  flex lg:flex-row flex-col-reverse`};
`

const Presentation = styled.div`
  ${tw`lg:w-1/2 w-full`};
`

const ImageWrapper = styled.div`
  ${tw`lg:flex lg:w-1/2 justify-center`};

  @media (min-width: 640px) {
    .gatsby-image-wrapper { {
      width: 300px;
    }
  }
`

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "moussa.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Welcome: FunctionComponent = () => {
  const { placeholderImage } = useStaticQuery(query)
  const { t } = useTranslation()

  return (
    <Section>
      <Presentation>
        <Title>{t('home.welcome.title')}</Title>
        <Text>
          Salut moi c&apos;est Moussa, développeur d’applications web et mobile.
          Je travaille principalement sur <strong>React</strong> et{' '}
          <strong>React Native</strong>.
        </Text>
        <Text>
          Vous trouverez sur ce portfolio l&apos;ensemble de mes projets,
          quelques articles autour de l&apos;écosystème{' '}
          <strong>JavaScript</strong> ainsi que des bonnes pratiques de
          développement.
        </Text>
      </Presentation>
      <ImageWrapper>
        <Img fluid={placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    </Section>
  )
}

export default Welcome
