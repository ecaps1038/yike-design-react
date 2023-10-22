import { test, expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import Base from '../Base';

const components = ['blockquote', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'span'] as const;

describe.each(components)('test Base component render', component => {
  test(`render <${component}>`, () => {
    const { container } = render(<Base component={component} />);
    expect(container.querySelector(component)).not.toBeNull();
  });
});
