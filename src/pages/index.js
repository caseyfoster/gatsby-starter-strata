import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Casey Foster'
  const siteDescription = 'Entrepreneur, VP of Product and a 15 year esports verteran.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <section id="one">
          <Gallery />
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
