import React from 'react';
import { render } from '@testing-library/react';
import Basic from '../Basic';

    test('renders page content', () => {
    const { getByText } = render(<Basic />);
    const headingElement = getByText(/Hello holotable heroes!/i);
    const subheadingElement = getByText(/What's going on the battle front?/i);
    const firstParagraph = getByText(/Try catch this point!/i);
    const secondParagraph = getByText(/Can you pass the test?/i);
    // expect(headingElement).toBeInTheDocument();
    // expect(subheadingElement).toBeInTheDocument();
    // expect(firstParagraph).toBeInTheDocument();
    // expect(secondParagraph).toBeInTheDocument();
    });
