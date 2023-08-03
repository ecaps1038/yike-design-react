import YiKeDemo from '@/components/YiKeDemo'
import type { MDXComponents } from 'mdx/types'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: props => props.children as JSX.Element,
    YiKeDemo: props => (
      <YiKeDemo lang={props.className} id={props.id} code={props.children} />
    )
  }
}