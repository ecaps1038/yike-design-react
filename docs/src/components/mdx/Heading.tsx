'use client';
import clsx from 'clsx';
import React from 'react';
import { Typography } from '@yike-design/react';

type LevelPropType = NonNullable<React.ComponentProps<typeof Typography.Title>['level']>;

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level: LevelPropType;
  enableAnchor?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ enableAnchor = false, children, className, ...props }) => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  return (
    <Typography.Title {...props} ref={headingRef} className={clsx(className, enableAnchor && 'group')}>
      {enableAnchor ? (
        <React.Fragment>
          {children}
          <span
            onClick={() => {
              // TODO: this is a hack method, use next/link and specify the position of page
              document.querySelector<HTMLAnchorElement>(`a[href="#${headingRef.current?.id}"]`)?.click();
            }}
            className="opacity-0 group-hover:opacity-100 text-primary ml-2 cursor-pointer"
          >
            #
          </span>
        </React.Fragment>
      ) : (
        children
      )}
    </Typography.Title>
  );
};

export default Heading;
