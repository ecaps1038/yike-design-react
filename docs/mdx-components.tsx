import type React from 'react';
import type { MDXComponents } from 'mdx/types';

import type { TOCData } from '@/types';
import Heading from '@/components/mdx/Heading';
import YiKeTOC from '@/components/mdx/YiKeTOC';
import YiKeDemo from '@/components/mdx/YiKeDemo';
import CodeBlockWrapper from '@/components/demo/CodeBlockWrapper';

const mdxHeadings = ([1, 2, 3, 4, 5] as const).reduce(
  (memo, level) => ({
    ...memo,
    [`h${level}`]: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
      <Heading level={level} {...props} enableAnchor={level !== 1} />
    ),
  }),
  {} as MDXComponents
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxHeadings,
    a: props => <a className="yike-doc-link" {...props} />,
    code: props => {
      // @ts-expect-error type error
      if (props.pure) {
        return <CodeBlockWrapper language={props.lang!} code={props.children as string} />;
      }
      return <code {...props} className="inline" />;
    },
    pre: props => props.children as React.JSX.Element,
    table: props => (
      <div className="yike-doc-table-wrapper">
        <table {...props} />
      </div>
    ),
    YiKeTOC: props => {
      let toc: TOCData[];
      try {
        toc = JSON.parse(props.toc) as TOCData[];
      } catch (error) {
        toc = [];
      }
      return <YiKeTOC toc={toc} />;
    },
    YiKeDemo: props => <YiKeDemo {...props} />,
  };
}
