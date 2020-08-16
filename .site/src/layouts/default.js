import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/nav'
import '../style/main.css'

const Layout = ({ children }) => {
    return(
        <div id='root' className="gradient-bg grid grid-cols-4 gap-8 p-8">
            <div className="bg-white p-4 col-span-1">
                <Nav />
            </div>
            <main className="bg-white p-8 col-span-3">
                {children}
            </main>
            <div className="fixed bottom-0 left-0 m-8">
                <img width={'72em'} src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo.svg" alt="DCP"/>
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout