// const path = require('path');
// const _ = require('lodash');
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type Slide implements Node {
//       html: String
//       index: Int
//     }
//   `);
// };

// // Remove trailing slash
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;

//   return new Promise((resolve, reject) => {
//     // Remove trailing slash
//     const newPage = Object.assign({}, page, {
//       path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
//     });

//     if (newPage.path !== page.path) {
//       // Remove the old page
//       deletePage(page);
//       // Add the new page
//       createPage(newPage);
//     }

//     resolve();
//   });
// };

// create slugs from filename for slides
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     //const mdNode = getNode(node.parent)
//     const slug = createFilePath({ node, getNode, basePath: `lectures` }).replace('/', '');
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// Create pages from markdown nodes
// exports.createPages = async ({ graphql, actions, createContentDigest, createNodeId }) => {
//   const { createPage, createNode } = actions
//   const slideTemplate = path.resolve(`src/templates/slide.js`)
//   const pageTemplate = require.resolve(`./src/templates/page.js`)

//   // fetch markdown file content through graphql
//   const result = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fileAbsolutePath
//             html
//             frontmatter {
//               slug
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

  // process slides pages
  // const slides = result.data.allMarkdownRemark.edges.filter(e => e.node.fileAbsolutePath.includes('lectures'));
  // slides.forEach(({ node }, index) => {
  //   createNode({
  //     id: createNodeId(`${node.id}_${index + 1} >>> Slide`),
  //     parent: node.id,
  //     slug: node.fields.slug,
  //     children: [],
  //     internal: {
  //       type: `Slide`,
  //       contentDigest: createContentDigest(node.html),
  //     },
  //     // images: images,
  //     html: node.html,
  //     index: index + 1,
  //   });
  //   createPage({
  //     path: `lectures/${node.fields.slug}`,
  //     component: slideTemplate,
  //     context: {
  //       layout: "slideLayout",
  //       presentation: node.fields.slug,
  //       // images: images,
  //       index: index + 1,
  //       absolutePath: process.cwd() + `../lectures#${index + 1}`,
  //     },
  //   });
  // });

  // process site pages
//   const pages = result.data.allMarkdownRemark.edges.filter(e => e.node.fileAbsolutePath.includes('pages'));
//   pages.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: pageTemplate,
//       context: {
//         layout: "default",
//         slug: node.frontmatter.slug,
//       },
//     })
//   });
// };



// slides.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1)
// split on <hr> tags ('---')
// const nodes = slides.flatMap((s) => s.node.html.split('<hr>').map((html) => ({
//   node: s.node, html
// })));

  // docpages.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1)
// const dNodes = docPages.flatMap((s) => s.node.html.split('<hr>').map((html) => ({
//   node: s.node, html
// })));

const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)
const pkg = require('./package.json')

const debug = Debug(pkg.name)

let basePath
let contentPath

const DeckTemplate = require.resolve(`./src/templates/deck`)

// exports.onPreBootstrap = ({ store }, opts = {}) => {
//   const { program } = store.getState()

//   basePath = opts.basePath || `/`
//   contentPath = opts.contentPath || `decks`

//   if (opts.cli) return
//   const dirname = path.join(program.directory, contentPath)
//   mkdirp.sync(dirname)

//   debug(`Initializing ${dirname} directory`)
// }

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

const resolveTitle = async (...args) => {
  const headings = await mdxResolverPassthrough('headings')(...args)
  const [first = {}] = headings
  return first.value || ''
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes(
    schema.buildObjectType({
      name: `Deck`,
      fields: {
        id: { type: `ID!` },
        slug: {
          type: `String!`,
        },
        title: {
          type: 'String!',
          resolve: resolveTitle,
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
    })
  )
}

exports.createPages = async ({ graphql, actions, reporter, pathPrefix }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              date
              desc
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allMdx } = result.data
  const decks = allMdx.edges

  // single deck mode
  // if (decks.length === 1) {
  //   const [deck] = decks
  //   const base = basePath === '/' ? '' : basePath
  //   const matchPath = [base, '*'].join('/')

  //   const slug = [pathPrefix, base].filter(Boolean).join('')

  //   createPage({
  //     path: basePath,
  //     matchPath,
  //     component: DeckTemplate,
  //     context: {
  //       ...deck.node,
  //       slug,
  //     },
  //   })
  //   createPage({
  //     path: base + '/print',
  //     component: DeckTemplate,
  //     context: {
  //       ...deck.node,
  //       slug,
  //     },
  //   })
  //   return
  // }

  // multi-deck mode
  decks.forEach(({ node }, index) => {
    const matchPath = [node.slug, '*'].join('/')
    const slug = [pathPrefix, node.slug].filter(Boolean).join('')

    createPage({
      path: node.slug,
      matchPath,
      component: DeckTemplate,
      context: {
        ...node,
        slug,
      },
    })

    createPage({
      path: slug + '/print',
      component: DeckTemplate,
      context: {
        ...node,
        slug,
      },
    })
  })

  // index page
  // createPage({
  //   path: basePath,
  //   component: DecksTemplate,
  //   context: {
  //     decks,
  //   },
  // })
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions

  const toPath = node => {
    const { dir } = path.posix.parse(node.relativePath)
    return path.posix.join(basePath, dir, node.name)
  }

  if (node.internal.type !== `Mdx`) return

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type !== `Mdx` || source !== contentPath) return

  const slug = toPath(fileNode)
  const id = createNodeId(`${node.id} >>> Deck`)

  createNode({
    slug,
    // Required fields.
    id,
    parent: node.id,
    children: [],
    internal: {
      type: `Deck`,
      contentDigest: createContentDigest(node.rawBody),
      content: node.rawBody,
      description: `Slide Decks`,
    },
  })
  createParentChildLink({ parent: fileNode, child: getNode(id) })
}

exports.onCreateDevServer = ({ app }) => {
  if (typeof process.send !== 'function') return
  process.send({
    mdxDeck: true,
  })
}