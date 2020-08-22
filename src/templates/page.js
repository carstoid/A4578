import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/default'

// import Image from '../components/image'
// import SEO from '../components/seo'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div
      className="col-span-3"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

// export const pageQuery = graphql`
//   query($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         slug
//         title
//       }
//     }
//   }
// `