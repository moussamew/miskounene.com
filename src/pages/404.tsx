import { FunctionComponent } from 'react'

import { SEO, Title, Text } from '../components'

const NotFoundPage: FunctionComponent = () => (
  <div>
    <SEO title="404 | Not found" />
    <Title>Not found</Title>
    <Text>Sorry bro!</Text>
  </div>
)

export default NotFoundPage
