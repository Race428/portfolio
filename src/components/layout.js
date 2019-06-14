/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>

        <div>

          <main>

    
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

          

              <Header siteTitle={data.site.siteMetadata.title} />

              {children}
              <div >
                <footer >
                  <p className='footer'>© {new Date().getFullYear()}, Built by Race Acheson using
            {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </p>
                </footer>
              </div>
          
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
