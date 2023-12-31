'use client';
import type React from 'react';
import { IS_DEV } from '@/utils/constants';
import capitalize from 'lodash.capitalize';
import PreviewerErrorBoundary from './PreviewerErrorBoundary';

interface ContainerProps {
  inline?: boolean;
  demo: string;
  component: string;
}

const PreviewerContainer: React.FC<ContainerProps> = ({ inline = false, component, demo }) => {
  const PreviewComponent = inline
    ? require(`!!@yike-design/mdx-demo/inline-loader!@/content/docs/components/${component}.mdx`)[demo]?.()
    : require(`@/content/demos/${component}/${demo}.tsx`).default;

  if (IS_DEV && PreviewComponent) {
    PreviewComponent.displayName = `YiKeDemo@${capitalize(component)}/${inline ? 'inline-' : ''}${demo}`;
  }

  return (
    <PreviewerErrorBoundary>
      <PreviewComponent />
    </PreviewerErrorBoundary>
  );
};

export default PreviewerContainer;
