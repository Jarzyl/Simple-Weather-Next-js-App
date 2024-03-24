import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Welcome message', () => {
  test('message renders correctly', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome in my weather app!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
