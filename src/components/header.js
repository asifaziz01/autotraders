import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import $ from 'jquery'

import header from '../css/header.module.css'
import toyotaLogo from '../images/toyota-fixed-logo.png'
import LogoSVG from './icons/logo'

const Header = () => {
  const {
      at_header,
      at_navbar_top,
      at_navbar_container,
      at_navbar_brand,
      at_navbar_brand_right,
      at_navbar_bottom,
      at_navbar_bottom_container,
      at_navbar,
      at_navbar_toggle,
      at_navbar_toggle_stripes,
      at_navbar_collapse,
      at_navbar_nav,
      at_nav_container,
      at_nav_item,
      at_nav_item_link,
      at_nav_item_link_desc,
    } = header,
    navAction = 'toyota sienna 2021 - nav',
    openNavigation = () => {
      $(`body`).hasClass('overflow-hidden')
        ? $(`body`).removeClass('overflow-hidden')
        : $(`body`).addClass('overflow-hidden')
    },
    itemSelected = () => {
      $(`body`).removeClass('overflow-hidden')
    }
  return (
    <header className={at_header}>
      <div className={at_navbar_top}>
        <div className={at_navbar_container}>
          <a
            className={at_navbar_brand}
            onClick={() =>
              window.dataLayer.push({
                event: 'gtm_bx',
                eventAction: 'toyota sienna 2021 - exit - trader',
                eventLabel: 'logo',
              })
            }
            href="//autotrader.ca"
          >
            <LogoSVG className="d-none d-sm-block" height={59} width={96} />
            <LogoSVG className="d-sm-none" height={50} width={80} />
          </a>
          <a
            rel="nofollow"
            href="https://ad.doubleclick.net/ddm/trackclk/N491202.140810AUTOTRADER.CAEN/B25408013.296830323;dc_trk_aid=490699074;dc_trk_cid=147005701;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;"
            onClick={() =>
              window.dataLayer.push({
                event: 'gtm_bx',
                eventAction: 'toyota sienna 2021 - exit - toyota',
                eventLabel: 'logo',
              })
            }
            className={at_navbar_brand_right}
          >
            <img className="" width="62px" src={toyotaLogo} alt="Toyota" />
            <img
              src="https://tps.doubleverify.com/visit.jpg?ctx=17512517&cmp=25408013&sid=3379295&plc=296830323&adsrv=1&btreg=&btadsrv=&crt=&tagtype=&dvtagver=6.1.img&"
              alt=""
              width="0"
              height="0"
            />
          </a>
        </div>
      </div>
      <div className={at_navbar_bottom}>
        <Container fluid className={at_navbar_bottom_container}>
          <Row noGutters={true} className="justify-content-center">
            <Col lg={10} md={9} className="position-initial">
              <Navbar
                variant="dark"
                expand={false}
                collapseOnSelect
                onToggle={openNavigation}
                className={at_navbar}
              >
                <Navbar.Toggle
                  className={at_navbar_toggle}
                  onClick={() => {
                    if (navAction !== undefined) {
                      window.dataLayer = window.dataLayer || []
                      window.dataLayer.push({
                        event: 'gtm_bx',
                        eventAction: navAction,
                        eventLabel: 'toggle',
                      })
                    }
                  }}
                  aria-controls="responsive-navbar-nav"
                >
                  <span className={at_navbar_toggle_stripes} />
                  <span className={at_navbar_toggle_stripes} />
                  <span className={at_navbar_toggle_stripes} />
                </Navbar.Toggle>
                <Navbar.Collapse className={at_navbar_collapse}>
                  <Nav className={at_navbar_nav}>
                    <div className={at_nav_container}>
                      <div className={at_nav_item}>
                        <Link
                          to="/index.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'home',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link}
                        >
                          HOME
                        </Link>
                        <Link
                          to="/index.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'home',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link_desc}
                        >
                          Sienna #VanProud
                        </Link>
                      </div>
                      <div className={at_nav_item}>
                        <Link
                          to="/20-reasons-to-believe.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'reasons',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link}
                        >
                          INTERACTIVE CONTENT
                        </Link>
                        <Link
                          to="/20-reasons-to-believe.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'reasons',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link_desc}
                        >
                          20 Reasons to Believe
                        </Link>
                      </div>
                      <div className={at_nav_item}>
                        <Link
                          to="/hardest-working-family-member.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'article - family',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link}
                        >
                          ARTICLE
                        </Link>
                        <Link
                          to="/hardest-working-family-member.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'article - family',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link_desc}
                        >
                          The hardest working family member
                        </Link>
                      </div>
                      <div className={at_nav_item}>
                        <Link
                          to="/sienna-from-every-row.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'article - sienna',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link}
                        >
                          ARTICLE
                        </Link>
                        <Link
                          to="/sienna-from-every-row.html"
                          onClick={() => {
                            window.dataLayer.push({
                              event: 'gtm_bx',
                              eventAction: navAction,
                              eventLabel: 'article - sienna',
                            })
                            itemSelected()
                          }}
                          className={at_nav_item_link_desc}
                        >
                          Sienna 2021, The View from Every Row
                        </Link>
                      </div>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
