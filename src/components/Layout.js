import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'


function Layout({ children, status, color }) {
  return (
    <Fragment>
      <Header headerPosition={status} bgcolor={color} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
