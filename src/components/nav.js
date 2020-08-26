import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteMetadata }) => {
  const { title } = siteMetadata

  return (
    <div className='flex flex-col fixed col-span-2'>
      <b>{title}</b>
      <br/>
      <span>A4578-3 & 4</span>
      <span>Columbia GSAPP</span>
      <span>Fall 2020</span>
      <br/>
      <Link activeClassName='link-active' to='/'>Home</Link>
      <br/>
      <b>Exercises</b>
      <Link activeClassName='link-active' to='/exercises/01_mapping-data'>Mapping Data</Link>
      <Link activeClassName='link-active' to='/exercises/02_analyzing-data-1'>Analyzing Data 1</Link>
      <Link activeClassName='link-active' to='/exercises/03_analyzing-data-2'>Analyzing Data 2</Link>
      <br/>
      <b>Resources</b>
      <Link activeClassName='link-active' to='/atlas'>Atlas Precedents</Link>
      <Link activeClassName='link-active' to='/data'>Data</Link>
    </div>
  )
};

export default Header;
