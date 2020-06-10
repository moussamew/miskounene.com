import React, { Fragment } from 'react';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import Wrapper from '../atomic/Wrapper';

function IndexPage(): JSX.Element {
  const title = 'Moussa Iskounene | Développeur Web';

  return (
    <Layout>
      <Metadata title={title} />
      <div>hello</div>
    </Layout>
  );
}

export default IndexPage;
