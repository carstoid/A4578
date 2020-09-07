import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/default';

export default function Template({ data }) {
  const { markdownRemark, site } = data
  const { siteMetadata } = site
  const { html, frontmatter } = markdownRemark // frontmatter is available here too

  return (
    <Layout siteMetadata={siteMetadata}>
      <div className='page-body metadata'>
        <div>Exercise {frontmatter.number}: {frontmatter.title}</div>
        <div className='flex justify-between'>
          <span>Posted {frontmatter.start}</span>
          <span>Due {frontmatter.end}</span>
        </div>
      </div>
      <div className="page-body col-span-3" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        type
        number
        slug
        title
        end
        start
      }
    }
  }
`;