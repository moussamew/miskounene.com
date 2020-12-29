import { FunctionComponent } from 'react'

import { Layout, SEO, Wrapper } from '../../components'

import Welcome from './Welcome'
import Projects from './Projects'

const Home: FunctionComponent = () => (
  <Layout>
    <SEO />
    <Wrapper>
      <Welcome />
      <Projects />
    </Wrapper>
  </Layout>
)

export default Home
