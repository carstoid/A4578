import React from 'react';

const Header = ({ frontmatter }) => {
  return (
    <div className='page-body metadata'>
    {/* <div>Exercise {frontmatter.number}: {frontmatter.title}</div> */}
    <div className='flex justify-between'>
      <span>Posted {frontmatter.start}</span>
      <span>Due {frontmatter.end}</span>
    </div>
  </div>
  )
};

export default Header;
