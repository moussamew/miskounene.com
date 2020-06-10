import React from 'react';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import Image from '../components/Image';
import Wrapper from '../atomic/Wrapper';

function IndexPage(): JSX.Element {
  const title = `Portfolio de Moussa Iskounene, développeur d'applications web & mobiles.`;

  return (
    <Layout>
      <Metadata title={title} />
      <Wrapper>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px` }}>
          <Image />
        </div>
      </Wrapper>
    </Layout>
  );
}

export default IndexPage;
