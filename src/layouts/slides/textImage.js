// example Layout.js
import React from 'react'

export default ({ children }) => (
  <div className='flex h-full w-full'>
    <div className='flex-grow'>ANOTHER DIV</div>
    <div className='flex-grow'>{children}</div>
  </div>
)