import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query getPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(locale: "CH", formatString: "DD, MMM YYYY")
        category
        image {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        embedImagesLocal {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: WEBP
            )
          }
        }
      }
      body
    }
  }
`

const PostTemplate = ({ data }) => {
  const {
    post: {
      frontmatter: { title, date, category, image, embedImagesLocal },
      body,
    },
  } = data
  return (
    <Layout>
      <Hero />
      <Wrapper>
        <article>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className='main-image'
          />
          <div className='post-info'>
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className='underline'></div>
          </div>
          <MDXRenderer embedImagesLocal={embedImagesLocal}>{body}</MDXRenderer>
        </article>
        <div>
          <Banner />
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`
export default PostTemplate
