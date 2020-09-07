import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
    <div className='flex flex-col items-start col-span-2'>
      <Link activeClassName='link-active' to='/'>Home</Link>
      <br/>
      <br/>
      <Link activeClassName='link-active' to='/exercises/01_mapping-data'>Exercise 1: Mapping Data</Link>
      {/* <Link activeClassName='link-active' to='/exercises/02_analyzing-data-1'>Analyzing Data 1</Link> */}
      {/* <Link activeClassName='link-active' to='/exercises/03_analyzing-data-2'>Analyzing Data 2</Link> */}
      {/* <br/>
      <b>Resources</b>
      <Link activeClassName='link-active' to='/atlas'>Atlas Precedents</Link>
      <Link activeClassName='link-active' to='/data'>Data</Link> */}
    </div>
);

export default Nav;
