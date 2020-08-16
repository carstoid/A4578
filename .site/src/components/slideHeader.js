import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function SlideHeader({ name, title, date, pageNums }) {
  const newDate = () => format(new Date(), 'MMM d, yyyy h:mm a');
  const [dt, setDt] = useState(newDate());

  useEffect(() => {
    let secTimer = setInterval( () => {
      setDt(newDate());
    }, 1000)

    return () => clearInterval(secTimer);
  }, []);

  return (
    <header>
      <div className="gradient-bg fixed top-0 right-0 w-full"></div>
      {/* <a href="./1" className="text-white">
        {title}
      </a> */}
      <div></div>
      {/* <div className="text-red-600">DRAFT</div> */}
      <time className="text-white">
        {dt}
      </time>
      <div className="fixed bottom-0 left-0 m-4">
        <a href="https://www1.nyc.gov/site/planning/index.page" title="DCP">
          <img className="w-16" src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo.svg" alt="DCP"/>
        </a>
      </div>
      <div className="fixed bottom-0 right-0 m-4 text-gray-600">
        {pageNums[0]} of {pageNums[1]}
      </div>
    </header>
  )
};
