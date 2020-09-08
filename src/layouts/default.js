import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Nav from '../components/nav';
import '../style/main.css';

const Layout = ({ children, siteMetadata }) => {
    const password = 'gis2020';
    const [enteredPassword, setEnteredPassword] = useState();

    useEffect(() => {
      var storedPassword = localStorage.getItem('pw');
      if (storedPassword != password) {
        var pass = prompt("Enter password");
        setEnteredPassword(pass);
        localStorage.setItem('pw', pass);
      } else {
        setEnteredPassword(storedPassword);
      }
    }, []);

    if (enteredPassword === password) {
      return(
        <div id='page-container' className='grid grid-cols-6 gap-8 p-8 text-md min-h-full'>
          <Header siteMetadata={siteMetadata} />
          <Nav />
          <div className='col-span-4 col-start-3'>
            {children}
          </div>
        </div>
      )
    } else {
      return(
        <div className='blank-login'/>
      )
    }

}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout