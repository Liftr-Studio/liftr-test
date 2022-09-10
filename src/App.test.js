import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the page title', () => {
  const { container } = render(<App />);
  const pageTitle = container.getElementsByClassName('headingTitle');

  expect(pageTitle).toBe(1);
});
