import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'


function Layout({ children, status }) {
  return (
    <Fragment>
      <Header headerPosition={status} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
