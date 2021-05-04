import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

export const query = graphql`
  query getCategory($category: String!) {
    postsList: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
          category
          date(formatString: "DD, MMM YYYY", locale: "CH")
          author
          readTime
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: WEBP
                placeholder: BLURRED
              )
            }
          }
        }
        excerpt
      }
    }
  }
`

const CategoryTemplate = (props) => {
  const {
    data: {
      postsList: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`Category/${category}`} />
    </Layout>
  )
}

export default CategoryTemplate
