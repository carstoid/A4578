
## Development Workflow

Run a local development server: from the `site-src` directory, `npx gatsby develop`.

Deploy to GitHub pages: from the `site-src` directory, run `npm run deploy`. This will create a new static build of the documentation site, copy in static pages from `presentations`, and automatically push changes to the `gh-pages` branch of the repository.

##

https://github.com/jxnblk/mdx-deck/tree/master/packages/gatsby-theme

## To-Do

- Worth it to use `gatsby-remark-images` or would be better to use `gatsby-remark-copy-linked-files`. Styling the former is very time-consuming, advantage is images are auto-optimized...