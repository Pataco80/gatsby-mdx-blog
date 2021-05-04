const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/post-template.js`)

  const getPost = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  getPost.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: blogTemplate,
      context: {
        slug,
      },
    })
  })
}
