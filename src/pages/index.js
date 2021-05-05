import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql, useStaticQuery } from 'gatsby'
import { RegVideo } from '../components/Complete'

export const getRecentPosts = graphql`
  {
    allPosts: allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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

const IndexPage = () => {
  const data = useStaticQuery(getRecentPosts)
  const postsList = data.allPosts.nodes
  return (
    <Layout>
      <Hero showPerson />
      <RegVideo />
      <Posts posts={postsList} title='Recents Posts' />
    </Layout>
  )
}

export default IndexPage
