'use client';
import React from 'react';
import ReactDOM from 'react-dom';

interface ShadowContentProps {
  root: HTMLDivElement;
}

const ShadowContent: React.FC<React.PropsWithChildren<ShadowContentProps>> = ({ root, children }) => {
  return ReactDOM.createPortal(children, root);
};

class ShadowView extends React.Component<React.PropsWithChildren<{ style?: string }>> {
  state = {
    root: null as HTMLDivElement | null,
  };

  setRoot = (element: HTMLDivElement) => {
    const root = element.attachShadow({ mode: 'open' });
    this.setState({ root });
  };

  render() {
    const { root } = this.state;
    const { children, style } = this.props;
    return (
      <div
        ref={this.setRoot}
        className="border p-5 rounded-lg border-yike"
      >
        {root && (
          <ShadowContent root={root}>
            <style>{style}</style>
            {children}
          </ShadowContent>
        )}
      </div>
    );
  }
}

export default ShadowView;
