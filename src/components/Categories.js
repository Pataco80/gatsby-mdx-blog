import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

export const getCategories = graphql`
  {
    categories: allMdx(sort: { fields: frontmatter___category, order: ASC }) {
      distinct(field: frontmatter___category)
    }
  }
`
const Categories = () => {
  const data = useStaticQuery(getCategories)
  const { distinct } = data.categories

  return (
    <>
      <ul className='categories'>
        {distinct.map((link) => {
          return (
            <Link to={`/${link}`} className='category'>
              {link}
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default Categories
