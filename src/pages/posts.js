import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql, useStaticQuery } from 'gatsby'
import Posts from '../components/Posts'

export const getAllPosts = graphql`
  {
    allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      nodes {
        frontmatter {
          title
          slug
          author
          date(locale: "CH", formatString: "DD, MMM YYYY")
          category
          readTime
          image {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                layout: CONSTRAINED
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

const PostsPage = () => {
  const data = useStaticQuery(getAllPosts)
  const postsList = data.allPosts.nodes
  return (
    <Layout>
      <Hero />
      <Posts posts={postsList} title='All Posts' />
    </Layout>
  )
}

export default PostsPage
