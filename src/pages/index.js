// Node components
import React, { useEffect, useState } from 'react'

// Project components
import Layout from '../components/layout'
import LandingHero from './sections/LandingHero'
import LandingCTA from './sections/LandingCta'
import LandingArticle from './sections/LandingArticle'
import LandingFeatures from './sections/LandingFeatures'
import StickyAd from '../components/sticky-ad'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const [virtualPagePushed, setVirtualPagePushed] = useState(0)
  useEffect(() => {
    if (
      window.dataLayer[window.dataLayer.length - 1].pageType !==
        '/brand-experience/toyota-sienna/2021/home/en' &&
      virtualPagePushed === 0
    ) {
      window.dataLayer.push({
        event: 'gtm_bx_virtual_page',
        pageType: '/brand-experience/toyota-sienna/2021/home/en',
        sponsoredContentCampaign: 'toyota sienna - 2021',
      })
      setVirtualPagePushed(1)
    }
  }, [virtualPagePushed])
  return (
    <Layout>
      <SEO title="Toyota Sienna" />
      <LandingHero />
      <LandingCTA />
      <LandingArticle />
      <LandingFeatures />
      <StickyAd />
    </Layout>
  )
}

export default IndexPage
