import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteMetadata }) => {
  const { title } = siteMetadata

  return (
    <div className='flex justify-between items-end align-baseline col-span-6'>
      <div className='page-title'>
        <Link to='/'>
          {title}
        </Link>
      </div>
      <div className='metadata'>
        <div>A4578-3 & 4</div>
        <div>Columbia GSAPP</div>
        <div>Fall 2020</div>
        <div>Carsten Rodin</div>
      </div>
    </div>
  )
};

export default Header;
