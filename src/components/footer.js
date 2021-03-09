import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import footer from '../css/footer.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    {
      footerImgXl: file(relativePath: { eq: "footer-lg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 630) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgMd: file(relativePath: { eq: "footer-md.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 630) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgSm: file(relativePath: { eq: "footer-fab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImgXs: file(relativePath: { eq: "footer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toyotaLogo: file(relativePath: { eq: "toyota-logo-footer.png" }) {
        childImageSharp {
          fixed(width: 75, height: 62) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <footer className={footer.at_footer}>
      <div className={footer.wrapper}>
        <Img
          fluid={data.footerImgXl.childImageSharp.fluid}
          alt="footerImgXl"
          className="d-none d-xl-block"
        />
        <Img
          fluid={data.footerImgMd.childImageSharp.fluid}
          alt="footerImgMd"
          className="d-none d-md-block d-xl-none"
        />
        <Img
          fluid={data.footerImgSm.childImageSharp.fluid}
          alt="footerImgSm"
          className="d-none d-sm-block d-md-none"
        />
        <Img
          fluid={data.footerImgXs.childImageSharp.fluid}
          alt="footerImgXs"
          className="d-sm-none"
        />
        <div className={footer.ad_box}>
          <div className={`container-xl px-xl-0 ${footer.ad_container}`}>
            <div className={footer.ad_inner}>
              <h4 className={footer.ad_heading_big}>
                <span>Get </span>
                <span>yours </span>
                <strong>today</strong>
              </h4>
              <h5 className={footer.ad_heading_I}>
                Become VanProud with your{' '}
                <strong>very own Toyota Sienna.</strong>
              </h5>
              <button
                onClick={() => {
                  window.dataLayer.push({
                    event: 'gtm_bx',
                    eventAction: 'toyota sienna 2021 - exit - toyota',
                    eventLabel: 'build and price',
                  })
                  window.location.href = `//toyota.ca?utm_source=autoTRADER&utm_medium=referral`
                }}
                type="button"
                className={`btn btn-primary ${footer.ad_button}`}
              >
                BUILD &amp; PRICE
              </button>
              <img
                SRC="https://ad.doubleclick.net/ddm/trackimp/N491202.140810AUTOTRADER.CAEN/B25408013.296741585;dc_trk_aid=490699074;dc_trk_cid=147005701;ord=54654847;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;=?"
                BORDER="0"
                HEIGHT="1"
                WIDTH="1"
                ALT="Advertisement"
              />
              <img
                src="https://tps.doubleverify.com/visit.jpg?ctx=17512517&cmp=25408013&sid=3379295&plc=296741585&adsrv=1&btreg=&btadsrv=&crt=&tagtype=&dvtagver=6.1.img&"
                alt=""
                width="0"
                height="0"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
