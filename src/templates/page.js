import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/default';
import ExerciseMetadata from '../components/exerciseMetadata';

export default function Template({ data }) {
  const { markdownRemark, site } = data
  const { siteMetadata } = site
  const { html, frontmatter } = markdownRemark // frontmatter is available here too

  return (
    <Layout siteMetadata={siteMetadata}>
      {(frontmatter.type == 'exercise') && 
        <ExerciseMetadata frontmatter={frontmatter}/>
      }
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