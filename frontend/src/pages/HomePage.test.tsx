import React from 'react';
import { render, screen } from '@testing-library/react';
import {HomePage} from "@/pages/HomePage";

test('renders main page', () => {
    render(<HomePage/>);
    const linkElement = screen.getByText(/prices for the/);
    expect(linkElement).toBeCalled()
})
