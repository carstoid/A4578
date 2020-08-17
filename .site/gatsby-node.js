const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Remove trailing slash
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
    });

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page);
      // Add the new page
      createPage(newPage);
    }

    resolve();
  });
};

// Create slides from markdown nodes
exports.createPages = async ({ graphql, actions, createContentDigest, createNodeId }) => {
  const { createPage, createNode } = actions
  const slideTemplate = path.resolve(`src/templates/slide.js`)
  const docsPageTemplate = require.resolve(`./src/templates/docsPage.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            html
            frontmatter {
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // process slides pages
  const slides = result.data.allMarkdownRemark.edges.filter(e => e.node.fileAbsolutePath.includes('slides'))

  // slides.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1)
  // split on <hr> tags ('---')
  // const nodes = slides.flatMap((s) => s.node.html.split('<hr>').map((html) => ({
  //   node: s.node, html
  // })));

  slides.forEach(({ node }, index) => {
    createNode({
      id: createNodeId(`${node.id}_${index + 1} >>> Slide`),
      parent: node.id,
      slug: node.fields.slug,
      children: [],
      internal: {
        type: `Slide`,
        contentDigest: createContentDigest(node.html),
      },
      // images: images,
      html: node.html,
      index: index + 1,
    });

    createPage({
      path: `slides/${node.fields.slug}`,
      component: slideTemplate,
      context: {
        layout: "slideLayout",
        presentation: node.fields.slug,
        // images: images,
        index: index + 1,
        absolutePath: process.cwd() + `../slides#${index + 1}`,
      },
    });
  })

  const docPages = result.data.allMarkdownRemark.edges.filter(e => e.node.fileAbsolutePath.includes('pages'))
  // docpages.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1)
  // const dNodes = docPages.flatMap((s) => s.node.html.split('<hr>').map((html) => ({
  //   node: s.node, html
  // })));

  docPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: docsPageTemplate,
      context: {
        layout: "default",
        slug: node.frontmatter.slug,
      },
    })
  })
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Slide implements Node {
      html: String
      index: Int
    }
  `);
};

// create slugs from filename for slides
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    //const mdNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `slides` }).replace('/', '');
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
