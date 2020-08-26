import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteMetadata }) => {
  const { title } = siteMetadata

  return (
    <div className='flex flex-col'>
      <h1>{title}</h1>
      <p>Columbia GSAPP, Fall 2020</p>
      <Link activeClassName='link-active' to='/'>Home</Link>

      <h2>Exercises</h2>
      <Link activeClassName='link-active' to='/atlas'>Mapping Data</Link>

      <h2>Resources</h2>
      <Link activeClassName='link-active' to='/atlas'>Atlas Precedents</Link>
      <Link activeClassName='link-active' to='/'>Data</Link>
      <Link activeClassName='link-active' to='/'>Home</Link>
    </div>
  )
};

export default Header;
