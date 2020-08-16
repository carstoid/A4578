import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: data.slide.html }}
    />
  )
};

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;