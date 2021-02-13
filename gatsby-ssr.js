/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

export const onRenderBody = ({ pathname, setHeadComponents }) => {
  let page = ''
  if (pathname) {
    if (pathname.includes('reasons')) page = '/reasons/'
    else if (pathname.includes('hardest')) page = '/article-family/'
    else if (pathname.includes('described')) page = '/article-sienna/'
    else page = '/home/'
  }
  setHeadComponents([
    <script
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `dataLayer=[{pageType:"/brand-experience/toyota-sienna/2021${page}en",sponsoredContentCampaign:"toyota sienna - 2021"}];var re=new RegExp("(?<!iPad.*)Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune");var GTM_ID=re.test(window.navigator.userAgent)?"GTM-6TXZ":"GTM-K7JHZJ";(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f)})(window,document,"script","dataLayer",GTM_ID);`,
      }}
    />,
    <script
    key="fb"
    dangerouslySetInnerHTML={{
      __html: `!function(f,b,e,v,n,t,s){f.fbq||(n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},f._fbq||(f._fbq=n),n.push=n,n.loaded=!0,n.version="2.0",n.queue=[],t=b.createElement(e),t.async=!0,t.src=v,s=b.getElementsByTagName(e)[0],s.parentNode.insertBefore(t,s))}(window,document,"script","//connect.facebook.net/en_US/fbevents.js"),fbq("init","1757208891165170"),fbq("track","PageView");`,
    }}
  />,
  ])
}
