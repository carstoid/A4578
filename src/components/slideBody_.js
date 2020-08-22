import { Link } from "gatsby";
import React from "react";
import { DOMParser } from 'xmldom';

export default function slideBody({ html }) {
  const docString = html;
  let domparser = new DOMParser();
  let doc = domparser.parseFromString(docString, 'text/html');

  const headingOnly = docString.includes('<!--TITLE-->');
  const imageOnly = docString.includes('<!--IMAGEONLY-->');
  const tableOnly = docString.includes('<!--TABLEONLY-->');

  // title slide format if top-level header
  if (html.includes('h1') | headingOnly) {
    return(
      <div
        className='text-center'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  // 
  else if (imageOnly) {
    return(
      <div
        className='image-full w-full h-full flex items-center justify-center py-12'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  else if (tableOnly) {
    return(
      <div 
        className='w-full h-full flex flex-col justify-start items-start pt-24 m-4' 
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  // make iframes full-screen
  else if (html.includes('iframe')) return (
    <div
      className='w-full h-full flex items-center justify-center'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  // images and markdown text in separate columns
  else {
    let imageFragment = new DOMParser().parseFromString('<html/>', 'text/html');
    const docImages = Array.from(doc.getElementsByTagName('img'));
    docImages.forEach((node) => {
      doc.removeChild(node);
      imageFragment.firstChild.appendChild(node);
    })
    const htmlNoImages = doc.toString();

    return (
      <div className='w-full h-full grid grid-cols-2 grid-rows-1 grid-flow-row-dense gap-8 m-4 border-solid border-4 border-gray-600'>
        <div
          className='flex flex-col justify-start items-start pt-24' 
          dangerouslySetInnerHTML={{ __html: htmlNoImages }}
        />
        <div 
          className='flex flex-col justify-center items-center'
          dangerouslySetInnerHTML={{ __html: imageFragment.toString() }}
        />
      </div>
    )
  }
}