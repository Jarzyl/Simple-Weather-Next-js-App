import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home component structure', () => {
  test('renders input field for city search', () => {
    render(<Home />);
    const inputField = screen.getByPlaceholderText('Search city');
    expect(inputField).toBeInTheDocument();
  });

  test('renders search button', () => {
    render(<Home />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  test('renders weather data display area', () => {
    render(<Home />);
    const weatherDisplay = screen.queryByTestId('weather-component');
    expect(weatherDisplay).not.toBeInTheDocument();
  });
});
