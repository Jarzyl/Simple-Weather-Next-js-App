import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from "../index";

describe('City input testing', () => {
  test('Entering a city updates the city state', () => {
    const { getByPlaceholderText } = render(<Home />);
    const input = getByPlaceholderText('Search city'); // Znajdujemy pole wprowadzania miasta na podstawie atrybutu placeholder

    fireEvent.change(input, { target: { value: 'Warsaw' } }); // Symulujemy zmianę wartości w polu wprowadzania na "Warsaw"

    expect(input.value).toBe('Warsaw'); // Sprawdzamy, czy wartość w polu wprowadzania została zaktualizowana
  });
});
