import React from "react"
import {navigate} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import NotFound from "../css/notfound.module.css"

const NotFoundPage = () => {
  const isBrowser = typeof window !== 'undefined'
  if(isBrowser && window.location.pathname === '/'){
    navigate('/index')
  }

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={NotFound.not_found_section}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
