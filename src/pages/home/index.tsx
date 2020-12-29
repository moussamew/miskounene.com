import { FunctionComponent } from 'react'

import { Layout } from '../../components'

import Welcome from './Welcome'
import Projects from './Projects'

const Home: FunctionComponent = () => (
  <Layout>
    <Welcome />
    <Projects />
  </Layout>
)

export default Home
