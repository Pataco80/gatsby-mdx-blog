import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  // logic components
}

export const MDXWrap = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
