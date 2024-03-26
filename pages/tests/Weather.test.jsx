import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../index';

describe('Weather search', () => {
  test('renders search input field', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search city');
    expect(searchInput).toBeInTheDocument();
  });

  test('allows user to type in city name', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search city');
    fireEvent.change(searchInput, { target: { value: 'New York' } });
    expect(searchInput.value).toBe('New York');
  });

  test('displays error message when empty city is submitted', () => {
    render(<Home />);
    const submitButton = screen.getByRole('button');

    fireEvent.click(submitButton);
    const errorMessage = screen.getByText('Please enter a city name.');
    expect(errorMessage).toBeInTheDocument();
  });
});
