import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import '../style/main.css'

const Layout = ({ children }) => {
    return(
        <div id='root' className="grid grid-cols-4 gap-8 p-8">
          <Header />
          {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout