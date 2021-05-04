const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/post-template.js`)
  const categoryTemplate = path.resolve(`src/templates/category-template.js`)

  const result = await graphql(`
    {
      post: allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
        category: distinct(field: frontmatter___category)
      }
    }
  `)

  result.data.post.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: blogTemplate,
      context: {
        slug,
      },
    })
  })

  result.data.post.category.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
