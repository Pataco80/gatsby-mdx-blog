import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'

const exampleCode = `
(function someDemo() {
var test = "Hello World!";
console.log(test);
})();`

const Examplecode = (props) => {
  const code = props.children.props.children.trim()
  const className = props.children.props.className
  const language = className.replace(/language-/, '')
  console.log(language)
  return (
    <Highlight theme={vsDark} {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Examplecode
